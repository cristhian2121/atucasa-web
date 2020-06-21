import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../../styles/variables.scss";

import { Product, Pepe } from "./Product";

import { GetProductService, GetProductStoreService } from "./../../services/Products-Service"

// Mock
import { productMock } from "../../mocks/product";

const ListProductsComponent = ({ productsSelected }) => {
  const storeCurrent = window.localStorage ? window.localStorage.getItem("store") : null
  const [productList, setProductList] = useState([])
  const products = [1, 2, 3, 4, 5];
  const headers = {
    avatar: "KH",
    icon: "",
    title: "ply with Goku",
    subheader: "Figure in proportion 1x1",
  };

  useEffect (() => {
      getProducts()
  },[]);
  const getProducts = async () => {
    try {
      // Request of products for client or user autenticate
      let response = storeCurrent ? await GetProductStoreService(storeCurrent) : await GetProductService()
      let resp = response.data
      setProductList(resp)
    } catch (e) { console.log('error create product', e) }
  };  

  const cardMedia = {
    image:
      "https://media.metrolatam.com/2018/10/25/goku-7863ead337591e85e23ea48a65296821-900x600.jpg",
    title: "Goku",
  };

  const cardContent = {
    description: "Goku is foumous person of goku's universe",
  };

  const validateSelected = (id) => !!productsSelected.find((_) => _ == id);

  return (
    <>
      <div className="col-12 px-0 d-flex flex-wrap">
        {productList.map((product) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 py-2"
            key={product.id}
          >
            <Pepe
              product={product}
              selected={validateSelected(product.id)}
            />
          </div>
        ))}
      </div>
      ;
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productReducer;
};

const ListProducts = connect(mapStateToProps, null)(ListProductsComponent);

export { ListProducts };
