import React, { useEffect, useState } from "react";

// import "../../styles/style.scss";
import { ActionPermPhoneMsg } from "material-ui/svg-icons";
import permPhoneMsg from "material-ui/svg-icons/action/perm-phone-msg";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Link, useHistory } from "react-router-dom";

export const StarClient = (props) => {
  const { store } = props
  let history = useHistory();

  const handleStore = () => {
    history.replace(`/store/products/${store.id}`)
  }
  return (
    <div className="productsale--product productsale--option" onClick={handleStore}>
      <Link
        to={{
          pathname: `/store/products/${store.id}`,
          state: {detail:store.name}
        }}
      >
        <img
          className="kh_img"
          src={store.url_logo || store.image}
          height="130px"
          width="95%"
          alt={store.name}
        />
        <button>Ver mas</button>
      </Link>
    </div>
  );
};

export const BarStartClient = (props) => {
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
        <h3 className="title__star">Tiendas destacadas</h3>
      </div>
      <div className="container__productsale">
        <Carousel
          onChange={onChange}
          slidesPerPage={5}
          autoPlay={6000}
          animationSpeed={3000}
          infinite
          slides={props.starStore.map((store) => (
            <div>
              <StarClient store={store}/>
            </div>
          ))}
          arrows
          clickToChange
        ></Carousel>
      </div>
    </div>
  );
};
