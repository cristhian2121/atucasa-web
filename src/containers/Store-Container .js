import React, { useEffect, useState } from "react";
import { ListProducts } from "../components";
import { GetProductStoreService } from "../services/Products-Service";
import { useParams } from "react-router-dom";

export const StoreContainer = (props) => {
  // const {location} = props
  const [products, setproducts] = useState([]);
  const { id } = useParams();

  const getProducts = async () => {
    let dataProducts;
    let response;
    try {
      response = await GetProductStoreService(id);//getServiceProducts(sourceData, id);
      dataProducts = response.data;
    } catch (e) {
      console.log("error getproducts product: ", e);
    }
    if (response && response.status) {
      setproducts(dataProducts);
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
      <div className="banner-top">
        <div className="container">
          <h3 >Tienda</h3>
          {/* <h4><Link to="/">Inicio</Link><label>/</label>Registrate</h4> */}
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="list-products-view">
        <ListProducts productList={products} />
      </div>
    </>
  );
};
