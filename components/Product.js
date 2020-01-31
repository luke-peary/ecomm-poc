import React from "react";
import { Typography } from "@material-ui/core";
import Link from "../src/Link";
import styled from "styled-components";
import Box from "./Box";

const Image = styled("img")`
  width: 100%;
`;

const Wrapper = styled(Box)`
  overflow: hidden;
`;

const ProductName = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const Product = ({
  product: {
    id,
    masterData: { current }
  }
}) => {
  const name = current.name;
  const image = current.masterVariant.images[0].url;
  const value = current.masterVariant.price
    ? current.masterVariant.price.value.centAmount
    : "";

  return (
    <Wrapper bgcolor="white" boxShadow="sm" borderRadius="borderRadius.md">
      <Link href={`/product/${id}`}>
        <Image src={image} />
      </Link>
      <Box textAlign="center">
        <ProductName href={`/product/${id}`}>{name}</ProductName>
        <Typography>{`$${(value / 100).toFixed(2)}`}</Typography>
      </Box>
    </Wrapper>
  );
};

export default Product;
