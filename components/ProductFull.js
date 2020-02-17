import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Button, CircularProgress } from "@material-ui/core";
import Link from "./Link";
import styled from "styled-components";
import Box from "./Box";
import { toPrice } from "../helpers/functions";
import { fetchProduct } from "../redux/actions";


class ProductFull extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
      this.props.dispatch(fetchProduct(this.props.productId))
  }

  shouldComponentRender() {
      if(this.props.loading === true) return false;
      
      return true;
  }

  render() {
      const {product, error, loading} = this.props;
      const { id, name, image, price } = product.product;

      if(!this.shouldComponentRender()) return <CircularProgress />

      return (
        <Wrapper bgcolor="white" boxShadow="sm" borderRadius="borderRadius.md">
          <Link href="/product/[id]" as={`/product/${id}`}>
            <Image src={image} />
          </Link>
          <Box textAlign="center">
            <Link href="/product/[id]" as={`/product/${id}`}>
              {name}
            </Link>
            <Typography>{toPrice(price)}</Typography>
            <Button onClick={addToCart}>Add to cart</Button>
          </Box>
        </Wrapper>
      )
  }
}

const addToCart = () => {
  //dispatch({ type: "ADD_TO_CART", product });
};

const Image = styled("img")`
  width: 100%;
`;

const Wrapper = styled(Box)`
  overflow: hidden;
`;

const mapStateToProps = state => ({
  product: state.product.product,
  loading: state.product.loading,
  error: state.product.error
});

export default connect(mapStateToProps)(ProductFull);
