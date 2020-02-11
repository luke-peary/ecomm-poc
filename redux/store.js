import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

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
  const value = price ? price.value.centAmount : 0;

  return {
    id,
    name,
    value,
    images
  };
};

const cleanedProducts = products.map(p => flatProduct(p));

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {
  products: cleanedProducts,
  cart: {}
};

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
