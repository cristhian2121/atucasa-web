import apiBussines from "./api";
// import { responseError, responseOk } from "../utils";

/* request to get clients */
export const getClientsService = async () => apiBussines.get(`/store`);

/* request update client */
export const updateClientService = (idClient, dataClient) =>
  apiBussines.put(`/store/${idClient}/`, dataClient);

/* request delete client */
export const deleteClientService = (idClient) =>
  apiBussines.delete(`/store/${idClient}/`);
