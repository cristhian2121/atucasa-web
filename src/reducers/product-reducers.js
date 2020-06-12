import { ADD_PRODUCT_TO_CAR, REMOVE_PRODUCT_TO_CAR } from "../const";

const initialState = {
  productsSelected: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CAR:
      let product = state.productsSelected.find(
        (_) => _.id == action.payload.id
      );
      let productsSelected = [];
      // Validate if priduct exist
      if (product) {
        product.number += 1;
        const productsAux = state.productsSelected.filter(
          (_) => _.id != product.id
        );
        productsSelected = productsAux;
      } else {
        product = action.payload;
        product.number = 1;
        productsSelected = [...state.productsSelected];
      }
      productsSelected.push(product);

      return {
        ...state,
        productsSelected: [...productsSelected],
      };
    case REMOVE_PRODUCT_TO_CAR:
      let product2 = state.productsSelected.find(
        (_) => _.id == action.payload.id
      );
      const productsSelectedAux = state.productsSelected.filter(
        (_) => _.id != action.payload.id
      );
      if (product2 && product2.number > 0) {
        product2.number -= 1;
        product2.number && productsSelectedAux.push(product2);
      }
      return {
        ...state,
        productsSelected: productsSelectedAux,
      };

    default:
      return state;
  }
};
