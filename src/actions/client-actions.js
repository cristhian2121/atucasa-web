import { REMOVE_CLIENT, UPDATE_CLIENT, GET_CLIENTS } from "../const";
import { getClientsService } from "../services/Client-Service";

export const removeClient = (id) => {
  return {
    type: REMOVE_CLIENT,
    payload: id,
  };
};

export const updateClient = (payload) => {
  return {
    type: UPDATE_CLIENT,
    payload,
  };
};

export const getClients = (payload) => {
  return (dispatch) => {
    return getClientsService().then((response) => {
      console.log("response:  ***", response);
      dispatch({
        type: GET_CLIENTS,
        payload: response.data,
      });
    });
  };
};

