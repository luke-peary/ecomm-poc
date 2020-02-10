// Cart

export const addToCart = product => ({
  type: "ADD_TO_CART",
  payload: {
    product
  }
});

export const removeFromCart = productId => ({
  type: "REMOVE_FROM_CART",
  payload: {
    id: productId
  }
});

// Products

export const getProductById = productId => ({
  type: "GET_PRODUCT_BY_ID",
  payload: {
    id: productId
  }
});
