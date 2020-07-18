import React, { useEffect, useState } from "react";
import { ListProducts } from "../components";
import { GetProductCategoryService } from "../services/Products-Service";
import { useParams } from "react-router-dom";

export const CategoryProductContainer = () => {
  const [products, setproducts] = useState([]);
  const { id } = useParams();

  // const getCategories = async () => {
  //   let dataRaw;
  //   try {
  //     dataRaw = await getCategoryProductsService();
  //     console.log("dataRaw: ", dataRaw);
  //   } catch (err) {
  //     console.log("err: ", err);
  //   }
  //   if (dataRaw && dataRaw.status) {
  //     setCategories(dataRaw.data);
  //   }
  // };

  const getProducts = async () => {
    // this.setState({ loader: false });
    try {
      // Request of all products
      let response = await GetProductCategoryService(id);
      console.log('response: ', response);
      let resp = response.data;
      resp && resp.length && setproducts(resp);
    } catch (e) {
      console.log("error getproducts product: ", e);
    }
    this.setState({ loader: true });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ListProducts productList={products} />
    </>
  );
};
