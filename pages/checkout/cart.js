import { connect } from "react-redux";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import FullWidth from "../../layouts/fullWidth";
import CartList from "../../components/CartList";
import TotalsTable from "../../components/TotalsTable";
import Link from "next/link";

const Cart = ({ cart }) => {
  const CartTotals = {
    subTotal: 200100,
    total: 300010,
    tax: 1000,
    shipping: 3456
  };

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
            <TotalsTable totals={CartTotals} />
            <Button variant="contained">
              <Link href="/checkout/shipping">
                <a>Go to shipping page</a>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
