import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import product from "./product"
import contentful from "./contentful";

const rootReducer = combineReducers({ cart, products, product, contentful });

export default rootReducer;
