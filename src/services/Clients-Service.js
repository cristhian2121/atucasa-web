/* File from product services */
import apiBussines from "./api";

/* request get groups users */
export const getGroupsService = () => apiBussines.get(`/groups_user/`);

/* request get categpries shop */
export const CategoryStoreService = () => apiBussines.get(`/category_store/`);

/* request get by id shop categories */
export const CategoryByIdService = (idCategory) =>
  apiBussines.get(`/category_store/${idCategory}`);

/* request for creating client */
export const SaveClientServer = (data) => apiBussines.post("/user/", data);

/* Mpethod for saving store */
export const SaveStoreServer = (data) => apiBussines.post("/store/", data);

/* request update client */
export const updateClientService = (idClient, dataClient) =>
  apiBussines.update(`/store/${idClient}`, dataClient);
