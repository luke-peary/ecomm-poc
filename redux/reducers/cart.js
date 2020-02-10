function cart(state = {}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.hasOwnProperty(action.product.id)) {
        return {
          ...state,
          [action.product.id]: {
            ...action.product,
            qty: 1
          }
        };
      }
      const newState = { ...state };
      newState[action.product.id].qty++;

      return newState;

    case "REMOVE_FROM_CART":
      if (state.hasOwnProperty(action.id)) {
        const newState = { ...state };

        if (state[action.id].qty > 1) {
          newState[action.id].qty--;

          return newState;
        }
        delete newState[action.id];

        return newState;
      }
      return;
    default:
      return state;
  }
}

export default cart;
