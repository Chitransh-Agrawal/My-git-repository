/**
 * when dispatch an action we can have only have  one reducer that is why
 * we need to combine reducers if we have more than one
 */

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
