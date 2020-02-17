import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import Product from "./Product";
import { fetchProducts } from "../redux/actions";

const GridItem = styled(Grid)`
  margin-bottom: 32px;
`;

const ProductGrid = props => {
  const { products, error, loading, dispatch } = props;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <CircularProgress />;

  const hasProducts = products && !!products.length;

  return (
    <Grid container direction="row" alignItems="stretch" spacing={2}>
      {hasProducts &&
        products.map(product => (
          <GridItem key={product.id} item xs={6} md={4}>
            <Product product={product} />
          </GridItem>
        ))}
    </Grid>
  );
};

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductGrid);
