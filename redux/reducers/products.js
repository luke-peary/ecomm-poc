function products(state = [], action) {
  switch (action.type) {
    case "GET_PRODUCTS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}

export default products;
