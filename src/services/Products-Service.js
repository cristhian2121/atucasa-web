/* File from product services */
import apiBussines from "./api";

/* request create products */
export const SaveProductService = (dataProduct) => apiBussines.post(`/product/`, dataProduct)
