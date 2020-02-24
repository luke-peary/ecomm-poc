import React from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import Link from "./Link";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import { addToCart } from "../redux/actions/cart";
import Heading from "./Heading";
import Text from "./Text";
import { toPrice } from "../helpers/functions";

const Image = styled("img")`
  width: 100%;
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, image, price } = product;

  const handleClick = () => {
    dispatch(addToCart(id, 1));
  };

  return (
    <Box bgcolor="white" boxShadow="sm" borderRadius="borderRadius.md">
      <Link href="/product/[id]" as={`/product/${id}`}>
        <Image src={image} />
      </Link>
      <Box textAlign="center" p={2}>
        <Link href="/product/[id]" as={`/product/${id}`}>
          <Text as="h4" variant="large" bold>
            {name}
          </Text>
        </Link>
        <Text variant="large">{toPrice(price)}</Text>
        <Button onClick={handleClick} variant="secondary" fullWidth>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
