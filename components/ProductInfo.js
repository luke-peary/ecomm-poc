import React from "react";
import { useDispatch } from "react-redux";
import Heading from "./Heading";
import Button from "./Button";

import { toPrice } from "../helpers/functions";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price } = product;

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <>
      <Heading as="h1">{name}</Heading>
      <Heading as="h3">{toPrice(price)}</Heading>
      <Button onClick={addToCart} variant="primary">
        Add to cart
      </Button>
    </>
  );
};

export default ProductInfo;
