import ProductAPI from "../services/ProductAPI";


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

export function fetchProducts() {
  return dispatch => {
    dispatch(getProductsBegin());
    ProductAPI.getProducts()
      .then(res => {
        dispatch(getProductsSuccess(res.products));
        return res.products;
      })
      .catch(error => {
        dispatch(getProductsFailure(error))
      });
  };
}

export const getProductsBegin = () => ({
  type: "GET_PRODUCTS_BEGIN"
});

export const getProductsSuccess = products => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: { products }
});

export const getProductsFailure = error => ({
  type: "GET_PRODUCTS_FAILURE",
  payload: { error }
});


// Product

export function fetchProduct(productId) {
  return dispatch => {
    dispatch(getProductBegin());
    ProductAPI.getProduct(productId)
      .then(res => {
        dispatch(getProductSuccess(res));
        return res;
      })
      .catch(error => {
        console.log(`There was an error: ${error}`)
        dispatch(getProductFailure(error))
      });
  };
}

export const getProductBegin = () => ({
  type: "GET_PRODUCT_BEGIN"
});

export const getProductSuccess = product => ({
  type: "GET_PRODUCT_SUCCESS",
  payload: { product }
});

export const getProductFailure = error => ({
  type: "GET_PRODUCT_FAILURE",
  payload: { error }
});