import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import Product from "./Product";
import { fetchProducts } from "../redux/actions";

class ProductGrid extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
      this.props.dispatch(fetchProducts())
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      
      return true;
  }

  render() {
      const {products, error, loading} = this.props;
      const hasProducts = products && !!products.length;

      console.log(`Is it loading? ${loading}`)
      console.log(`Products are: ${products}`)

      if(!this.shouldComponentRender()) return <LoadingSpinner />

      return (
        <Grid container direction="row" alignItems="stretch" spacing={2}>
          {hasProducts &&
            products.map(product => (
              <GridItem key={product.id} item xs={6} md={4}>
                <Product product={product} />
              </GridItem>
            ))}
        </Grid>
      )
  }
}

const GridItem = styled(Grid)`
  margin-bottom: 32px;
`;

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductGrid);
