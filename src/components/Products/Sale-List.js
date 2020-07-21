import React, { useEffect, useState } from "react";

import { ProductSale } from "./Product-Sale";

// import "../../styles/style.scss";
import { ActionPermPhoneMsg } from "material-ui/svg-icons";
import permPhoneMsg from "material-ui/svg-icons/action/perm-phone-msg";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Product } from "./Product"

export const SaleProduct = (props) => {
  const { product } = props;

  return (
    <>
      <div className="productsale--product">
        <Product product={product} seeMore={true}/>
        {/* <img
          className="kh_img"
          src={props.product.url_image || props.product.image}
          height="130px"
          width="95%"
          alt={props.product.name}
        />
        <button>Ver mas</button> */}
      </div>
    </>
  );
};

export const SaleList = (props) => {
  const [pepes, setpepes] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const $productCarrusel = document.querySelector(
      ".BrainhubCarouselItem--clickable"
    );
    if ($productCarrusel) {
      $productCarrusel.style.paddingTop = "12px";
      $productCarrusel.style.paddingBottom = "12px";
    }
  }, []);

  const onChange = (value) => setValue(value);

  return (
    <div className="container__secction">
      <div className="title__secction">
        <h3 className="title__star">Productos destacados</h3>
      </div>
      <div className="container__productsale">
        <Carousel
          onChange={onChange}
          slidesPerPage={5}
          autoPlay={6000}
          animationSpeed={3000}
          infinite
          slides={props.saleProducts.map((product) => (
            <div>
              <SaleProduct product={product}/>
            </div>
          ))}
          arrows
          clickToChange
        ></Carousel>
      </div>
    </div>
  );
};
