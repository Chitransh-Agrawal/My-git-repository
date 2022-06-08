/**
 * Three different actions one for each actionType
 * the are just objects with data to the new store ,which will be created after the action is dispatched
 * actions need at least one properties @type also can normally should  have @payload (data)
 */

import { actionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
