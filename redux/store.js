import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

import products from "../data/products";

const flatProduct = product => {
  const {
    id,
    masterData: {
      current: {
        name,
        masterVariant: { price, images }
      }
    }
  } = product;
  return {
    id,
    name,
    price,
    images
  };
};

const cleanedProducts = products.map(p => flatProduct(p));

const initialState = {
  products: cleanedProducts,
  cart: {}
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware())
);

export default store;
