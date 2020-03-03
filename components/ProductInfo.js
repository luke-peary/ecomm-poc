import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Heading from "./Heading";
import Button from "./Button";
import { addToCart } from "../redux/actions/cart";
import QtyControl from "./QtyControl";

import { toPrice } from "../helpers/functions";

const ProductInfo = ({ product }) => {
  const { id, name, price } = product;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const handleClick = () => {
    dispatch(addToCart(id, qty));
  };

  const increaseQty = () => {
    const newQty = qty + 1;

    setQty(newQty);
  };

  const decreaseQty = () => {
    const newQty = qty > 1 ? qty - 1 : qty;

    setQty(newQty);
  };

  return (
    <>
      <Heading as="h1" variant="h2">
        {name}
      </Heading>
      <Heading as="h3" variant="h3">
        {toPrice(price)}
      </Heading>
      {/* <Heading as="span" varaint="h4">
        {qty}
      </Heading> */}
      <QtyControl
        value={qty}
        increment={() => increaseQty()}
        decrement={() => decreaseQty()}
      />
      <Button onClick={handleClick} variant="primary">
        Add to cart
      </Button>
    </>
  );
};

export default ProductInfo;
