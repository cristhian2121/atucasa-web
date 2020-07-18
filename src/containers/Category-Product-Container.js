import React, { useEffect, useState } from "react";
import { Loader, ListProducts } from "../components";
import { GetProductCategoryService, CategoryByIdService } from "../services";
import { useParams } from "react-router-dom";

export const CategoryProductContainer = () => {
  const [products, setproducts] = useState([]);
  const [loader, setloader] = useState(true);
  const [category, setcategory] = useState({});
  const { id } = useParams();
  const getProducts = async () => {
    // this.setState({ loader: false });
    setloader(true);
    try {
      // Request of all products
      const productsRaw = await GetProductCategoryService(id);
      const categoryRaw = await CategoryByIdService(id);
      const resp = productsRaw.data;
      resp && resp.length && setproducts(resp);
      categoryRaw && categoryRaw.data && setcategory(categoryRaw.data);
    } catch (e) {
      console.log("error getproducts product: ", e);
    }
    setloader(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loader ? (
        <Loader hidden={!loader} />
      ) : (
        <div>
          <h3 className="titleSection">{category.name}</h3>
          <ListProducts productList={products} />
        </div>
      )}
    </>
  );
};
