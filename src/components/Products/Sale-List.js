import React, { useEffect, useState } from "react";

import { ProductSale } from "./Product-Sale";

// import "../../styles/style.scss";
import { ActionPermPhoneMsg } from "material-ui/svg-icons";
import permPhoneMsg from "material-ui/svg-icons/action/perm-phone-msg";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export const SaleProduct = () => {
  return (
    <div className="productsale--product">
      <img
        src="https://cdn.starwebserver.se/shops/latinprodukter/files/cola-fresa-5.jpg"
        alt="tarrito rojo"
      />
      <button>Ver mas</button>
    </div>
  );
};

export const SaleList = () => {
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
    <div>
      <div className="title__secction">
        <h3>Ofertas especiales</h3>
      </div>
      <div className="container__productsale">
        <Carousel
          onChange={onChange}
          slidesPerPage={3}
          autoPlay={6000}
          animationSpeed={3000}
          infinite
          slides={pepes.map(() => (
            <div>
              <SaleProduct />
            </div>
          ))}
          arrows
          clickToChange
        ></Carousel>
      </div>
      {/* <div className="container__productsale">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <SaleProduct />
        ))}
      </div> */}
    </div>
  );
};
