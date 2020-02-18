const initialState = {
  loading: false,
  items: [],
  error: null
};

function contentful(state = initialState, action) {
  switch (action.type) {
    case "GET_PAGE_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "GET_PAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        page: action.payload.page
      };
    case "GET_PAGE_FAILURE":
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

export default contentful;
