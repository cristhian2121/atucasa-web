/* File from product services */
import apiBussines from "./api";

/* request create products */
export const SaveProductService = (dataProduct) =>
  apiBussines.post(`/product/`, dataProduct);

/* Request for get products */
export const GetProductService = (idStore) => apiBussines.get(`/product/`);

/* Request for get products for store*/
export const GetProductStoreService = (idStore) => apiBussines.get(`/product/?store=${idStore}`)
/* Request get products for category */
export const GetProductCategoryService = (idCategory) => apiBussines.get(`/product/?category_product=${idCategory}`)

/* request get all categories product */
export const getCategoryProductsService = () => apiBussines.get(`/category_product/`)

/* request delete products */
export const deleteProductService = (idProduct) =>
  apiBussines.delete(`/product/${idProduct}`);

/* request update product */
export const updateProductService = (idProduct, dataProduct) =>
  apiBussines.update(`/product/${idProduct}`, dataProduct);
