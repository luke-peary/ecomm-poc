import React from "react";
import { useDispatch } from "react-redux";
import { Typography, Button } from "@material-ui/core";
import Link from "next/link";
import styled from "styled-components";
import Box from "./Box";
import { toPrice } from "../helpers/functions";

const Image = styled("img")`
  width: 100%;
`;

const Wrapper = styled(Box)`
  overflow: hidden;
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, images, price } = product;

  const image = images[0].url;
  const value = price ? price.value.centAmount : "";

  const addToCart = () => {
    console.log("adding to cart");
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <Wrapper bgcolor="white" boxShadow="sm" borderRadius="borderRadius.md">
      <Link href="/product/[id]" as={`/product/${id}`}>
        <a>
          <Image src={image} />
        </a>
      </Link>
      <Box textAlign="center">
        <Link href="/product/[id]" as={`/product/${id}`}>
          <a>{name}</a>
        </Link>
        <Typography>{toPrice(value)}</Typography>
        <Button onClick={addToCart}>Add to cart</Button>
      </Box>
    </Wrapper>
  );
};

export default Product;
