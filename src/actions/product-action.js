import { ADD_PRODUCT_TO_CAR, REMOVE_PRODUCT_TO_CAR } from "../const";

export const addProductToCar = (payload) => {
  return {
    type: ADD_PRODUCT_TO_CAR,
    payload,
  };
};

export const removeProductToCar = (payload) => {
  return {
    type: REMOVE_PRODUCT_TO_CAR,
    payload,
  };
};