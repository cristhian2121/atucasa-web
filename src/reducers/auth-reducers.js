import { GET_USER, SAVE_USER, CLEAR_USER, KEY_SESSION } from "../const";

const initialState = {
  user: window.sessionStorage.getItem(KEY_SESSION)
    ? JSON.parse(window.sessionStorage.getItem(KEY_SESSION))
    : undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    case CLEAR_USER:
      window.sessionStorage.setItem(KEY_SESSION, undefined);
      state.user = undefined;
      return {
        ...state,
      };
    case SAVE_USER:
      window.sessionStorage.removeItem(
        KEY_SESSION
      );
      state.user = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
