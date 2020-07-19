import React, { useState, useEffect } from "react";

//style
import './style.scss'

export const ShoppingList = ({ products }) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {}, []);

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
              <td>Componente</td>
              <td>{product.price}</td>
              <td>Componente</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
