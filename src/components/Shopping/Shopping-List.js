import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// components
import { FlooterCard } from "../Products/Flooter-Product";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// Actions
import { removeProductToCar } from "../../actions";
//style
import "./style.scss";

export const ShoppingListComponent = ({
  products,
  // actionAddProductToCar,
  actionRemoveProductFromCar,
}) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {}, []);

  const handleAddProductToCar = (product) => {
    // actionAddProductToCar(product);
  };

  const handleRemoveProductToCar = (product) => {
    // actionRemoveProductFromCar(product);
  };
  const handleDeleteProduct = (product) => {
    product.number = 0;
    actionRemoveProductFromCar(product);
  };
  return (
    <>
      <div className="container__shopping">
        <table>
          <tr className="shopping__header">
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
          {products.map((product) => (
            <tr>
              <td>
                <img src={product.url_image} height={"100px"} width={"100px"} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <FlooterCard
                  quantity={product.number}
                  product={product}
                  addProductToCar={handleAddProductToCar}
                  removeProductToCar={handleRemoveProductToCar}
                />
              </td>
              <td>{product.price * product.number}</td>
              <td onClick={() => handleDeleteProduct(product)}>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  actionRemoveProductFromCar: removeProductToCar,
};

const ShoppingList = connect(null, mapDispatchToProps)(ShoppingListComponent);
export { ShoppingList };
