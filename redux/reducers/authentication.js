const initialState = {
  loadingDone: false,
  error: null
};

function authentication(state = initialState, action) {
  switch (action.type) {
    case "SIGNIN_BEGIN":
      return {
        ...state,
        loadingDone: false,
        error: null
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        loadingDone: true
      };
    case "SIGNIN_FAILURE":
      return {
        ...state,
        loadingDone: false
      };
    default:
      return state;
  }
}

export default authentication;
