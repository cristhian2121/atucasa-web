import React, { useEffect, useState } from "react";

import { GetProductCategoryService } from "../services/Products-Service";

import { BarProduct } from "../components";

export const ProductByCategory = ({ categories }) => {  
  const [productsCategory, setproductsCategory] = useState([]);

  const getProductByCategory = async (categories) => {
    const answer = await createRequest(categories);
    setproductsCategory(answer);
  };

  useEffect(() => {
    getProductByCategory(categories);
  }, [categories]);

  return (
    <>
      {productsCategory.map((products, index) => (
        <div key={index}>
          <BarProduct products_={products} titleSection={categories[index].name} />
        </div>
      ))}
    </>
  );
};

const createRequest = async (categories) => {
  let queries = [];
  for (const item of categories) {
    queries.push(GetProductCategoryService(item.id));
  }
  if (!queries.length) return queries;
  const response = await Promise.all(queries);
  queries = response.map((_) => _.data);
  return queries;
};
