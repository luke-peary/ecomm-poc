import styled from "styled-components";
import { Card } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { toPrice } from "../helpers/functions";
import { useDispatch } from "react-redux";
import Link from "./Link";
import Text from "./Text";

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
              <Image src={item.variant.images[0].url} />
            </Link>
          </ItemImage>
          <ItemName>
            <Text as="span">{item.name.en}</Text>
          </ItemName>
          <ItemPrice>
            <Text as="span">{toPrice(item.price.value.centAmount)}</Text>
          </ItemPrice>
          <ItemQty>
            <Text as="span">{item.quantity}</Text>
          </ItemQty>
          <ItemControls>
            <Remove
              onClick={() => removeFromCart(item.id)}
              style={{ marginRight: "24px" }}
              fontSize="large"
            />
            <Add onClick={() => addToCart(item)} fontSize="large" />
          </ItemControls>
          <ItemTotal>
            <Text as="span">{toPrice(item.totalPrice.centAmount)}</Text>
          </ItemTotal>
        </CartListItem>
      ))}
    </CartListWrapper>
  );
};

export default CartList;
