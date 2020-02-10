import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import FullWidth from "../../layouts/fullWidth";
import Typography from "@material-ui/core/Typography";
import Box from "../../components/Box";
import Button from "@material-ui/core/Button";
import { toPrice } from "../../helpers/functions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Product = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const product = props.products.find(
    p => p.id === (router && router.query.id)
  );

  if (!product) return null;
  const { id, name, images, price } = product;

  const image = images[0].url;
  const value = price ? price.value.centAmount : "";

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <FullWidth>
      <Container fixed>
        <Box my={4}>
          <Typography variant="h1" component="h1" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h3" component="h3" gutterBottom>
            {toPrice(value)}
          </Typography>
          <Button variant="contained" onClick={addToCart}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={removeFromCart}>
            Remove this from Cart
          </Button>
        </Box>
      </Container>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Product);
