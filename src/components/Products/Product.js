import React from "react";
import { connect } from "react-redux";

import { addProductToCar } from "../../actions";
import "./style.scss";

import { FlooterCard } from "./Flooter-Product";
import { CardProxy } from "../../proxyes";

const ProductComponent = (props) => {
  const { product, selected } = props;
  const quantityProduct = product && product.number ? product.number : 0;
  // const _handleClick = (event, id) => {
  //   props.addProductToCar(id);
  // };
  // const _handleUnClick = (event, id) => props.removeProduct(id);

  const handleAddProduct = (event, product) => props.addProductToCar(product);

  return (
    <div className="">
      <div className="">
        <a href="#" data-toggle="modal" data-target="#myModal4" className="">
          <img
            className="kh_img"
            src={product.url_image}
            height="130px"
            width="95%"
            alt=""
          />
          <div className="offer">
            <p>
              <span>Oferta</span>
            </p>
          </div>
        </a>
        <div className="mid-1">
          <div className="women">
            <h6>
              <a href="single.html">{product.name}</a>(
              {product.presentatio || "1 Kg"})
            </h6>
          </div>
          <div className="mid-2">
            <p>
              {/* <label>$4.00</label> */}
              <em className="item_price">$ {product.price}</em>
            </p>
            <div className="block">
              <div className="starbox small ghosting"> </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="add">
            <button
              className="btn btn-danger my-cart-btn my-cart-b"
              onClick={(e) => handleAddProduct(e, product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addProductToCar,
};

const Product = connect(null, mapDispatchToProps)(ProductComponent);
export { Product };
