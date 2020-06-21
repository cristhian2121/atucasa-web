import React from "react";

import { FlooterCard } from "./Flooter-Product";
import { CardProxy } from "../../proxyes";

export const Product = (props) => {
  const { product, selected } = props;
  const quantityProduct = product && product.number ? product.number : 0;
  const _handleClick = (event, id) => {
    props.addProductToCar(id);
  };
  const _handleUnClick = (event, id) => props.removeProduct(id);
  return (
    <>
      <CardProxy
        product={product}
        clickEvent={_handleClick}
        unClickEvent={_handleUnClick}
        selected={selected}
        FlooterCard={
          <FlooterCard quantity={quantityProduct} product={product} />
        }
      />
    </>
  );
};

export const Pepe = ({ product, selected }) => {
  console.log("product: ", product.image);
  return (
    <div className="">
      <div className="">
        <a
          href="#"
          data-toggle="modal"
          data-target="#myModal4"
          className=""
        >
          <img src={product.image} height="130px" width="100%" alt="" />
          <div className="offer">
            <p>
              <span>Oferta</span>
            </p>
          </div>
        </a>
        <div className="mid-1">
          <div className="women">
            <h6>
              <a href="single.html">Soya Chunks</a>(1 kg)
            </h6>
          </div>
          <div className="mid-2">
            <p>
              <label>$4.00</label>
              <em className="item_price">$3.50</em>
            </p>
            <div className="block">
              <div className="starbox small ghosting"> </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="add">
            <button
              className="btn btn-danger my-cart-btn my-cart-b"
              data-id="4"
              data-name="Soya Chunks"
              data-summary="summary 4"
              data-price="3.50"
              data-quantity="1"
              data-image="images/of3.png"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
