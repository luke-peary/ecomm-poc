import { Container, Grid } from "@material-ui/core";
import FullWidth from "../layouts/fullWidth";
import ProductFilter from "../components/ProductFilter";
import ProductGrid from "../components/ProductGrid";
import Heading from "../components/Heading";
import Box from "../components/Box";

const Listing = props => {
  return (
    <FullWidth>
      <Container>
        <Box mt={4}>
          <Grid container direction="row">
            <Grid item xs={12} md={3} bgcolor="pink">
              <ProductFilter />
            </Grid>
            <Grid item xs={12} md={9}>
              <Heading variant="h2" as="h2">
                All products
              </Heading>
              <ProductGrid />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FullWidth>
  );
};

export default Listing;
