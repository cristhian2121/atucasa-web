import { GET_CLIENTS, REMOVE_CLIENT, UPDATE_CLIENT } from "../const";

const initialState = {
  clients: [],
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: [...payload],
      };
    case REMOVE_CLIENT:
      const clientsAux = state.clients.filter((_) => _.id != action.payload.id);
      return {
        ...state,
        clients: [...clientsAux],
      };
    case UPDATE_CLIENT:
      const indexSearched = state.clients.findIndex((_) => _.id == payload.id);
      const clientsAux = state.clients;
      if (indexSearched >= 0) {
        clientsAux[indexSearched] = payload;
      }
      return {
        ...state,
        clients: [clientsAux],
      };

    default:
      return state;
  }
};
