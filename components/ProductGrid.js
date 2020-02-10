import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import Product from "./Product";

const GridItem = styled(Grid)`
  margin-bottom: 32px;
`;

const ProductGrid = props => {
  const products = props.products;
  const hasProducts = !!products.length;

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

const mapStateToProps = (state, ownProps) => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductGrid);
