/* File from product services */
import apiBussines from "./api";

/* request create products */
export const SaveProductService = (dataProduct) => apiBussines.post(`/product/`, dataProduct)

/* Request for get products */
export const GetProductService = (idStore) => apiBussines.get(`/product/`)

/* Request for get products for store*/
export const GetProductStoreService = (idStore) => apiBussines.get(`/product/?store=${idStore}`)

/* request get categories product */
export const getCategoryProductsService = () => apiBussines.get(`/category_product/`)
