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
import { ButtonAdd } from "../../proxyes";

export const ShoppingListComponent = ({
  products,
  // actionAddProductToCar,
  actionRemoveProductFromCar,
}) => {
  const [loader, setloader] = useState(true);
  const [total, settotal] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const $totals = document.querySelectorAll(".shopping-table-total");
      let subTotal = 0;
      if (!$totals.length) return 0;
      $totals.forEach(($label) => {
        const text = $label.innerText;
        subTotal += text ? parseFloat(text) : 0;
      });
      settotal(subTotal);
    }, 500);
  }, [products]);

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
  const reduceValues = (lastValue, currentValue) => {
    let value = lastValue;
    if (isNaN(lastValue)) value = lastValue.number;
    return value + currentValue.number;
  };
  const sumTotal = () => {
    setTimeout(() => {
      const $totals = document.querySelectorAll(".shopping-table-total");
      let subTotal = 0;
      if (!$totals.length) return 0;
      $totals.forEach(($label) => {
        const text = $label.innerText;
        subTotal += text ? parseFloat(text) : 0;
      });
      settotal(subTotal);
    }, 500);
  };

  const payProducts = () => {};

  return (
    <>
      <div className="container__shopping">
        <table>
          <thead className="shopping__header">
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.url_image}
                    height={"100px"}
                    width={"100px"}
                  />
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
                <td className="shopping-table-total">
                  {product.price * product.number}
                </td>
                <td onClick={() => handleDeleteProduct(product)}>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length && (
          <div className="col-12 d-flex justify-content-end align-items-center">
            <div className="total__product">
              Cantidad de articulos:
              {products.reduce(reduceValues)}
              <span>Total: {total}</span>
            </div>
            <div>
              <ButtonAdd text={"Pagar"} clickEvent={payProducts} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  actionRemoveProductFromCar: removeProductToCar,
};

const ShoppingList = connect(null, mapDispatchToProps)(ShoppingListComponent);
export { ShoppingList };
