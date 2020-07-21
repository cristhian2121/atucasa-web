import React from "react";
import { connect } from "react-redux";
import { addProductToCar, removeProductToCar } from "../../actions";

import { ButtonLess, ButtonPluss } from "../../proxyes";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const FlooterCardComponent = ({
  quantity,
  product,
  addProductToCar,
  removeProductToCar,
}) => {
  const handleClickLess = () => {
    removeProductToCar(product);
  };
  const handleClickPluss = () => {
    addProductToCar(product);
  };

  return (
    <div className="col-12 px-0 d-flex justify-content-end align-items-center">
      <div className="pr-2">{quantity}</div>
      <ButtonPluss variant="outlined" _handleClick={handleClickPluss} />
      <ButtonLess variant="outlined" _handleClick={handleClickLess} />
    </div>
  );
};

const mapDispatchToProps = {
  addProductToCar,
  removeProductToCar,
};

const FlooterCard = connect(null, mapDispatchToProps)(FlooterCardComponent);
export { FlooterCard };
