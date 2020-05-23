import React from "react";
import { MdFavoriteBorder } from 'react-icons/md'

import { Img, Button, ImgWrapper } from "./style";


const DEFAUL_IMAGE =
  "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/rick-morty-pelicula.jpg?itok=thJFYqHN";

export const PothoCard = ({ id, likes = 0, src = DEFAUL_IMAGE }) => {
  return (
    <article>
      <div>
        <a href={`/detail/${id}`}>
          <img src={src} />
        </a>
      </div>

      <button>{likes} likes!</button>
    </article>
  );
};
