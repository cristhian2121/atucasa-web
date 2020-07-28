import { CLEAR_USER, SAVE_USER, GET_USER } from "../const";

export const getUser = (payload) => {
  return {
    type: GET_USER,
    payload,
  };
};

export const saveUser = (payload) => {
  return {
    type: SAVE_USER,
    payload,
  };
};

export const clearUser = (payload) => {
  return {
    type: CLEAR_USER,
    payload,
  };
};
