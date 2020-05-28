import React from "react";
import { connect } from "react-redux";
import { addProductToCar } from "../../actions";

import { CardProxy } from "../../proxyes";

const ProductComponent = (props) => {
  const { headers, cardMedia, cardContent, selected } = props
  const _handleClick = (e) => {
    console.log("OK");
    props.addProductToCar(1);
  };
  return (
    <>
      <CardProxy
        headers={headers}
        cardMedia={cardMedia}
        cardContent={cardContent}
        clickEvent={_handleClick}
      />
    </>
  );
};

const mapDispatchToProps = {
  addProductToCar
};

const Product = connect(null, mapDispatchToProps)(ProductComponent);
export { Product };
