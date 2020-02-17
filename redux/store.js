import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import ProductAPI from "../services/ProductAPI";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {
  products: {},
  cart: {}
};

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(thunk), composeWithDevTools(applyMiddleware()))
  );
  let persistor = persistStore(store);

  // persistor.purge();

  return { store, persistor };
};
