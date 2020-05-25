import React from "react";
import "../../styles/variables.scss";
import { Product } from "./Product";
import { CardProxy } from "../../proxyes/Card-Proxy";

export const ListProducts = () => {
  const products = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="col-12 px-0 d-flex flex-wrap">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-2">
            <CardProxy key={product} />
          </div>
        ))}
      </div>
      ;
    </>
  );
};
