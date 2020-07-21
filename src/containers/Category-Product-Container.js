import React, { useEffect, useState } from "react";
import { Loader, ListProducts } from "../components";
import { GetProductCategoryService, CategoryByIdService } from "../services";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

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
      {loader ? (
        <Loader hidden={!loader} />
      ) : (
        <div>
          <div className="banner-top">
            <div className="container">
              <h3 >{category.name}</h3>
              <h4><Link to="/">Inicio</Link><label>/</label>{category.name}</h4>
              <div className="clearfix"> </div>
            </div>
          </div>
          {/* <h3 className="titleSection"></h3> */}
          <div className="list-products-view">
            <ListProducts productList={products} />
          </div>
        </div>
      )}
    </>
  );
};
