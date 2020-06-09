import React from "react";
import { connect } from "react-redux";
import { addProductToCar } from "../../actions";

import { CardProxy, Butt, ButtonLess, ButtonPluss } from "../../proxyes";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const FlooterCard = ({ quantity }) => (
  <div className="col-12 px-0 d-flex">
    <div>{quantity}</div>
    <ButtonPluss variant="outlined">
    </ButtonPluss>
    <ButtonLess variant="outlined">
    </ButtonLess>
  </div>
);

const ProductComponent = (props) => {
  const { headers, cardMedia, cardContent, selected } = props;
  const _handleClick = (event, id) => {
    props.addProductToCar(id);
  };
  const _handleUnClick = (event, id) => props.removeProduct(id);
  return (
    <>
      <CardProxy
        headers={headers}
        cardMedia={cardMedia}
        cardContent={cardContent}
        clickEvent={_handleClick}
        unClickEvent={_handleUnClick}
        selected={selected}
        FlooterCard={FlooterCard({ quantity: 0 })}
      />
    </>
  );
};

const mapDispatchToProps = {
  addProductToCar,
};

const Product = connect(null, mapDispatchToProps)(ProductComponent);
export { Product };
