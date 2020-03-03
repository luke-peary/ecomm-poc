const initialState = {
  loading: false,
  cart: {},
  error: null
};

function cart(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "ADD_TO_CART_SUCCESS":
      return {
        ...state,
        loading: false,
        cart: action.payload
      };
    case "ADD_TO_CART_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cart: {}
      };
    case "GET_CART_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "GET_CART_SUCCESS":
      return {
        ...state,
        loading: false,
        cart: action.payload
      };
    case "GET_CART_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cart: {}
      };
    default:
      return state;
  }
}

export default cart;
