import { connect } from "react-redux";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import FullWidth from "../../layouts/fullWidth";
import CartList from "../../components/CartList";
import TotalsTable from "../../components/TotalsTable";
import Link from "next/link";

const Cart = ({ cart }) => {
  return (
    <FullWidth>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Cart
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={9}>
            {!!Object.keys(cart).length && <CartList items={cart} />}
          </Grid>
          <Grid item xs={12} md={3}>
            <TotalsTable />
          </Grid>
        </Grid>
        <Button variant="contained">
          <Link href="/checkout/shipping">
            <a>Go to shipping page</a>
          </Link>
        </Button>
      </Container>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
