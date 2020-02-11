import styled from "styled-components";
import { Card, Typography } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { toPrice } from "../helpers/functions";
import { useDispatch } from "react-redux";
import Link from "./Link";

const CartListItem = styled("li")`
  display: flex;
  flex-direction: row;
  padding: 16px 0;
  border-top: 1px solid grey;
  &:first-child {
    border-top: 0;
  }
`;

const CartListWrapper = styled(Card)`
  padding: 24px;
`;

const Image = styled("img")`
  width: 100%;
`;

const ItemImage = styled("div")`
  width: 10%;
  text-align: left;
`;

const ItemName = styled("div")`
  width: 35%;
  text-align: left;
`;

const ItemPrice = styled("div")`
  width: 15%;
  text-align: left;
`;

const ItemQty = styled("div")`
  width: 10%;
  text-align: left;
`;

const ItemControls = styled("div")`
  width: 15%;
  text-align: left;
`;

const ItemTotal = styled("div")`
  width: 15%;
  text-align: right;
`;

const CartList = ({ items }) => {
  const dispatch = useDispatch();

  const addToCart = item => {
    dispatch({ type: "ADD_TO_CART", item });
  };

  const removeFromCart = id => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <CartListWrapper>
      {Object.values(items).map(item => (
        <CartListItem key={item.id}>
          <ItemImage>
            <Link href="/product/[id]" as={`/product/${item.id}`}>
              <Image src={item.images[0].url} />
            </Link>
          </ItemImage>
          <ItemName>
            <Typography variant="h6" component="span">
              {item.name}
            </Typography>
          </ItemName>
          <ItemPrice>
            <Typography variant="h6" component="span">
              {toPrice(item.value)}
            </Typography>
          </ItemPrice>
          <ItemQty>
            <Typography variant="h6" component="span">
              {item.qty}
            </Typography>
          </ItemQty>
          <ItemControls>
            <Remove
              onClick={() => removeFromCart(item.id)}
              style={{ "margin-right": "24px" }}
            />
            <Add onClick={() => addToCart(item)} />
          </ItemControls>
          <ItemTotal>
            <Typography variant="h6" component="span">
              {toPrice(item.value * item.qty)}
            </Typography>
          </ItemTotal>
        </CartListItem>
      ))}
    </CartListWrapper>
  );
};

export default CartList;
