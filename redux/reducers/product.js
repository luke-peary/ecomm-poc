const initialState = {
  loading: false,
  product: {},
  error: null
}

function product(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload
      };
    case "GET_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        product: {}
      };
    default:
      return state;
  }
}

export default product;