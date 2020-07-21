import React, { useEffect, useState } from "react";
import { ListProducts } from "../components";
import { GetProductCategoryService } from "../services/Products-Service";
import { useParams } from "react-router-dom";

export const CategoryProductContainer = () => {
  const [products, setproducts] = useState([]);
  const { id } = useParams();

  const getProducts = async () => {
    // this.setState({ loader: false });
    let dataProducts;
    let response;
    try {
      // Request of all products
      response = await GetProductCategoryService(id);//getServiceProducts(sourceData, id);
      dataProducts = response.data;
    } catch (e) {
      console.log("error getproducts product: ", e);
    }
    if (response && response.status) {
      setproducts(dataProducts);
      // this.setState({ loader: true });
    }
  };

  // const getServiceProducts = async (sourceData, id) => {
  //   // let sourceData;
  //   try {
  //     switch (sourceData) {
  //       case "productCategory":
  //         return GetProductCategoryService(id);
  //         break;
  //       case "productsStore":
  //         return GetProductStoreService(id)
  //         break;
  //     }
  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ListProducts productList={products} />
    </>
  );
};
