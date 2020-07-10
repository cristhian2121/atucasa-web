import apiBussines from "./api";
// import { responseError, responseOk } from "../utils";

/* request to get clients */
export const getClientsService = async () => apiBussines.get(`/store`);
