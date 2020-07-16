import { REMOVE_CLIENT, UPDATE_CLIENT, GET_CLIENTS, LOADER } from "../const";
import {
  getClientsService,
  updateClientService,
  deleteClientService,
} from "../services/Client-Service";

export const removeClient = (id) => {
  return async (dispatch) => {
    dispatch({
      type: LOADER,
      payload: true,
    });
    const answer = await deleteClientService(id);
    console.log("answer: ", answer);
    dispatch({
      type: REMOVE_CLIENT,
      payload: id,
    });
  };
  return {
    type: REMOVE_CLIENT,
    payload: id,
  };
};

export const updateClient = (client) => {
  return async (dispatch) => {
    dispatch({
      type: LOADER,
      payload: true,
    });
    const answer = await updateClientService(client.id, client);
    console.log("answer: ", answer);
    dispatch({
      type: UPDATE_CLIENT,
      payload: client,
    });
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
