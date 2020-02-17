import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import FullWidth from "../../layouts/fullWidth";
import Typography from "@material-ui/core/Typography";
import Box from "../../components/Box";
import Button from "@material-ui/core/Button";
import { toPrice } from "../../helpers/functions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import ProductFull from "../../components/ProductFull";

const ProductPage = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  /*
  const product = props.products.find(
    p => p.id === (router && router.query.id)
  );

  if (!product) return null;
  const { id, name, images, value } = product;

  const image = images[0].url;
  console.log(product);
  */
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <FullWidth>
      <Container fixed>
        <ProductFull productId={router.query.id} />
      </Container>
    </FullWidth>
  );
};

export default ProductPage;


