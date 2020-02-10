import { Container, Grid } from "@material-ui/core";
import FullWidth from "../layouts/fullWidth";
import ProductFilter from "../components/ProductFilter";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ProductGrid from "../components/ProductGrid";
import Heading from "../components/Heading";

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

const Listing = props => {
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
            <ProductGrid />
          </Grid>
        </Grid>
      </Container>
    </FullWidth>
  );
};

export default Listing;
