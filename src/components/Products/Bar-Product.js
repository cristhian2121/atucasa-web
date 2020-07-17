import React, { useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Product } from "./Product";


export const BarProduct = ({ titleSection, products_ }) => {
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
        <h3>{titleSection}</h3>
      </div>
      <div className="container__productsale">
        <Carousel
          onChange={onChange}
          slidesPerPage={3}
          // autoPlay={6000}
          // animationSpeed={3000}
          infinite
          slides={products_.map((product) => (
            <div>
              <Product product={product} />
            </div>
          ))}
          arrows
          clickToChange
        ></Carousel>
      </div>
    </div>
  );
};
