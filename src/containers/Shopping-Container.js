import React, { useState, useEffect } from "react";
import { Loader, ShoppingList } from "../components";
import { connect } from "react-redux";

const ShoppingContainerComponent = ({ productsSelected }) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {}, []);

  return (
    <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
      <h2 className="section__title">Productos</h2>
      <div>
        <ShoppingList products={productsSelected} />
      </div>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productReducer;
};

export const ShoppingContainer = connect(
  mapStateToProps,
  null
)(ShoppingContainerComponent);
