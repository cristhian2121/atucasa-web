import { ADD_PRODUCT_TO_CAR, REMOVE_PRODUCT_TO_CAR } from "../const";

const reducer = (state, action) => {
  console.log('action.type: ', action.type);
  switch (action.type) {
    case ADD_PRODUCT_TO_CAR:
      return {
        ...state,
        productsSelected: [...state.productsSelected, action.payload],
      };
    case REMOVE_PRODUCT_TO_CAR:
      const productsSelectedAux = state.productsSelected.filter(
        (_) => _ != action.payload
      );
      return {
        ...state,
        productsSelected: productsSelectedAux,
      };

    default:
      return state;
  }
};

export default reducer;
