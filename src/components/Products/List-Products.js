import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../../styles/variables.scss";

import { Product, IndividualProduct } from "./Product";

import { Loader } from "../index";

import {
  GetProductService,
  GetProductStoreService,
  deleteProductService,
} from "./../../services/Products-Service";

// Hook
import { useSessionStorage } from "../../Hooks";

const ListProductsComponent = (props) => {
  const [user, setUser] = useSessionStorage('android')
  const storeCurrent = user
  console.log('storeCurrent: ', storeCurrent);
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);
  const products = [1, 2, 3, 4, 5];
  const headers = {
    avatar: "KH",
    icon: "",
    title: "ply with Goku",
    subheader: "Figure in proportion 1x1",
  };
  const deleteProduct = async (id) => {
    /* Request for deleting product, this is enable for client */
    if (storeCurrent) {
      try {
        setLoader(false);
        let response = await deleteProductService(id);
        removeProduct(id);
        setLoader(true);
      } catch (e) {
        console.log("error delete product: ", e);
      }
    } else console.log("No cuenta con los permisos suficientes");
  };
  const removeProduct = (id) => {
    /* Method for remove product id DOM */
    let products = productList.filter((item) => item.id != id);
    setProductList(products);
  };

  const validateSelected = (id) =>
    !!props.productsSelected.find((_) => _ == id);
  return (
    <>
      <div className="col-12 px-0 d-flex flex-wrap">
        {props.productList.map((product) => (
          <div
            className="col-12 product-search"
            key={product.id}
          >
            <Product
              product={product}
              selected={validateSelected(product.id)}
              deleteProduct={deleteProduct}
            />
          </div>
        ))}
      </div>
      <Loader hidden={loader} />
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productReducer;
};

const ListProducts = connect(mapStateToProps, null)(ListProductsComponent);

export { ListProducts };
