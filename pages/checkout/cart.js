import { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Typography, Grid } from "@material-ui/core";
import FullWidth from "../../layouts/fullWidth";
import CartList from "../../components/CartList";
import Button from "../../components/Button";
import TotalsTable from "../../components/TotalsTable";
import { getCart } from "../../redux/actions/cart";

const Cart = ({ cart, dispatch }) => {
  const total = cart && cart.cart && cart.cart.totalPrice && cart.cart.totalPrice.centAmount
  const subtotal = total*0.9
  const taxes = total - subtotal

  const CartTotals = {
    subTotal: subtotal,
    total: total,
    tax: taxes,
    shipping: 0
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <FullWidth>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Cart
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={9}>
            {!!cart && !!cart.cart && <CartList items={cart.cart.lineItems} />}
          </Grid>
          <Grid item xs={12} md={3}>
            <TotalsTable totals={CartTotals} />
            <Button variant="primary" href="/checkout/shipping" fullWidth>
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Container>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps)(Cart);
