/* File from product services */
import apiBussines from "./api";

/* request get groups users */
export const getGroupsService = () => apiBussines.get(`/groups_user/`);

/* request get categpries shop */
export const CategoryStoreService = () => apiBussines.get(`/category_store/`)

/* request for creating client */
export const SaveClientServer = (data) => apiBussines.post('/user/', data)

/* Mpethod for saving store */
export const SaveStoreServer = (data) => apiBussines.post('/store/', data)
