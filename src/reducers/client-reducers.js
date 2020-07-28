import { GET_CLIENTS, REMOVE_CLIENT, UPDATE_CLIENT, LOADER } from "../const";

const initialState = {
  clients: [],
  error: false,
  loader: true
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: [...action.payload],
        loader: false
      };
    case REMOVE_CLIENT:
      const clientsAux = state.clients.filter((_) => _.id != action.payload);
      return {
        ...state,
        clients: [...clientsAux],
        loader: false
      };
    case UPDATE_CLIENT:
      const indexSearched = state.clients.findIndex((_) => _.id == action.payload.id);
      const clientsUpdateAux = state.clients;
      if (indexSearched >= 0) {
        clientsUpdateAux[indexSearched] = action.payload;
      }
      return {
        ...state,
        clients: [...clientsUpdateAux],
        loader: false
      };
    case LOADER:
      return {
        ...state,
        loader: true
      }



    default:
      return state;
  }
};
