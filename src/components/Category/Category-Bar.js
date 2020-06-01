import React from "react";

import { ExpansionPanelProxy } from "../../proxyes/Expansion-panel";
import style from './style.scss';

export const CategoryBar = (props) => {

  const elements = [
    {
      id:1,
      name: 'Panaderia',
      disabled: false,
      url: 'https://st3.depositphotos.com/4693369/16004/v/1600/depositphotos_160044838-stock-illustration-bread-colorful-bakery-product-icon.jpg'
    },
    {
      id:2,
      name: 'Lacteos',
      disabled: false,
      url: 'https://c8.alamy.com/comp/K346GT/cow-milk-box-icon-K346GT.jpg'
    },
    {
      id:3,
      name: 'Aseo',
      disabled: false,
      url: 'https://cdn.dribbble.com/users/138119/screenshots/6290933/cleaning-icon.png'
    }
  ]
  return (
    <>
      <div>
        <h5 className={style.titleSection}>Categorias</h5>
        <ExpansionPanelProxy items={elements}/>
      </div>
    </>
  );
};
