import React from "react";
import { connect } from "react-redux";

import "../../styles/variables.scss";

import { Product } from "./Product";

const ListProductsComponent = ({ productsSelected }) => {
  console.log('productsSelected: ', productsSelected);
  const products = [1, 2, 3, 4, 5];
  const headers = {
    avatar: "KH",
    icon: "",
    title: "ply with Goku",
    subheader: "Figure in proportion 1x1",
  };

  const cardMedia = {
    image:
      "https://media.metrolatam.com/2018/10/25/goku-7863ead337591e85e23ea48a65296821-900x600.jpg",
    title: "Goku",
  };

  const cardContent = {
    description: "Goku is foumous person of goku's universe",
  };
  return (
    <>
      <div className="col-12 px-0 d-flex flex-wrap">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-2" key={product}>
            <Product
              headers={headers}
              cardMedia={cardMedia}
              cardContent={cardContent}
            />
          </div>
        ))}
      </div>
      ;
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('pep');
  return {
    productsSelected: state.productsSelected,
  };
};

const ListProducts = connect(
  mapStateToProps,
  null
)(ListProductsComponent);

export {
  ListProducts
}
