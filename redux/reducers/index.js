import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import product from "./product"
import contentful from "./contentful";
import authentication from "./authentication";

const rootReducer = combineReducers({ cart, products, product, contentful, authentication });

export default rootReducer;
