import React, { useEffect, useState } from "react";
import { ListProducts } from "../components";
import { GetProductService } from '../services/Products-Service'

export const CategoryProductContainer = () => {
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    // this.setState({ loader: false });
    try {
      // Request of all products
      let response = await GetProductService();
      let resp = response.data;
      setproducts(resp);
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
