import { connect } from "react-redux";
import { Container, Typography, Button } from "@material-ui/core";
import FullWidth from "../../layouts/fullWidth";
import Link from "next/link";

const Cart = ({ cart }) => {
  return (
    <FullWidth>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Cart
        </Typography>
        <ul>
          {Object.values(cart).map(item => (
            <li key={item.id}>
              <Typography variant="h4" component="span" gutterBottom>
                {item.name}
              </Typography>
            </li>
          ))}
        </ul>
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
