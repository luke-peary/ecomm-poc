import React from "react";
import { useDispatch } from "react-redux";
import Heading from "./Heading";
import Button from "./Button";
import { addToCart } from "../redux/actions/cart";

import { toPrice } from "../helpers/functions";

const ProductInfo = ({ product }) => {
  const { id, name, price } = product;

  const handleClick = () => {
    dispatch(addToCart(id, 1));
  };

  return (
    <>
      <Heading as="h1">{name}</Heading>
      <Heading as="h3">{toPrice(price)}</Heading>
      <Button onClick={handleClick} variant="primary">
        Add to cart
      </Button>
    </>
  );
};

export default ProductInfo;
