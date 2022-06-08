/**
 * the redux store contains all application data (global state)
 * createStore function takes two arguments :
 * 1- reducers or combined reducers
 * 2- the state
 * 3- to show the redux chrome extension when need to add third parameter
 */

import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
