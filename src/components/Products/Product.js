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

  const handleDeleteProduct = (id) => props.deleteProduct(id)

  return (
    <>
      <CardProxy
        product={product}
        clickEvent={_handleClick}
        unClickEvent={_handleUnClick}
        selected={selected}
        FlooterCard={
          <FlooterCard quantity={quantityProduct} product={product} deleteProduct={handleDeleteProduct}/>
        }
      />
    </>
  );
};
