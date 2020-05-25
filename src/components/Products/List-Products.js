import React from "react";
import "../../styles/variables.scss";
import { Product } from "./Product";

export const ListProducts = () => {
  const products = [1, 2, 3, 4];
  return (
    products.map(product => <Product id={products} />)
  );
};
