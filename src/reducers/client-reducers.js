import { GET_CLIENTS, REMOVE_CLIENT, UPDATE_CLIENT } from "../const";

const initialState = {
  clients: [],
};

export const clientReducer = (state = initialState, action) => {
  console.log('action.payload: ', action.payload);
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: [...action.payload],
      };
    case REMOVE_CLIENT:
      const clientsAux = state.clients.filter((_) => _.id != action.payload);
      return {
        ...state,
        clients: [...clientsAux]
      }
    // case UPDATE_CLIENT:
    //   const indexSearched = state.clients.findIndex((_) => _.id == payload.id);
    //   const clientsUpdateAux = state.clients;
    //   if (indexSearched >= 0) {
    //     console.log('Yes yes');
    //     clientsUpdateAux[indexSearched] = payload;
    //   }
    //   console.log('Yes yes', clientsUpdateAux);
    //   return {
    //     ...state,
    //     clients: [clientsUpdateAux],
    //   };

    default:
      return state;
  }
};
