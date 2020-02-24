import CartServices from "../../services/CartAPI";

export function addToCart(productId, quantity) {
  return dispatch => {
    dispatch(addToCartBegin(productId, quantity));
    CartServices.addToCart({
      productId,
      quantity
    })
      .then(res => {
        console.log(res);
        dispatch(addToCartSuccess(res.cart));
        return res.cart;
      })
      .catch(error => {
        dispatch(addToCartFailure(error));
      });
  };
}

export function getCart() {
  return dispatch => {
    dispatch(getCartBegin());
    CartServices.getCart()
      .then(res => {
        console.log(res);
        dispatch(getCartSuccess(res.cart));
        return res.cart;
      })
      .catch(error => {
        dispatch(getCartFailure(error));
      });
  };
}

export const addToCartBegin = (productId, quantity) => ({
  type: "ADD_TO_CART_BEGIN",
  payload: {
    productId,
    quantity
  }
});

export const addToCartSuccess = cart => ({
  type: "ADD_TO_CART_SUCCESS",
  payload: { cart }
});

export const addToCartFailure = error => ({
  type: "ADD_TO_CART_FAILURE",
  payload: { error }
});

export const getCartBegin = () => ({
  type: "GET_CART_BEGIN"
});

export const getCartSuccess = cart => ({
  type: "GET_CART_SUCCESS",
  payload: { cart }
});

export const getCartFailure = error => ({
  type: "GET_CART_FAILURE",
  payload: { error }
});
