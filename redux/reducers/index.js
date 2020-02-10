import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import contentful from "./contentful";

const rootReducer = combineReducers({ cart, products, contentful });

export default rootReducer;
