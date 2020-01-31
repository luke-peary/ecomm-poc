import React from "react";
import { Container, Grid } from "@material-ui/core";
import FullWidth from "../layouts/fullWidth";
import Product from "../components/Product";
import ProductFilter from "../components/ProductFilter";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import Heading from "../components/Heading";

const GridItem = styled(Grid)`
  margin-bottom: 32px;
`;

const GET_PRODUCTS = gql`
  {
    products {
      results {
        id
        masterData {
          current {
            name(locale: "en")
            masterVariant {
              images {
                url
              }
              price(currency: "USD") {
                value {
                  centAmount
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Listing = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const results = data && data.products.results;

  return (
    <FullWidth>
      <Container>
        <Grid container direction="row">
          <Grid item xs={12} md={3} bgcolor="pink">
            <ProductFilter />
          </Grid>
          <Grid item xs={12} md={9}>
            <Heading variant="h2" as="h2">
              TOPS
            </Heading>
            <Grid container direction="row" alignItems="stretch" spacing={2}>
              {data &&
                results.map(product => (
                  <GridItem key={product.id} item xs={6} md={4}>
                    <Product product={product} />
                  </GridItem>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </FullWidth>
  );
};

export default withApollo(Listing);
