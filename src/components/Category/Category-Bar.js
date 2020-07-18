import React, { useEffect, useState } from "react";
import { getCategoryProductsService } from "../../services/Products-Service";

import { ExpansionPanelProxy } from "../../proxyes/Expansion-panel";
import style from "./style.scss";
import { Link, useHistory } from "react-router-dom";

export const CategoryBar = (props) => {
  let history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let dataRaw;
    try {
      dataRaw = await getCategoryProductsService();
      console.log("dataRaw: ", dataRaw);
    } catch (err) {
      console.log("err: ", err);
    }
    if (dataRaw && dataRaw.status) {
      setCategories(dataRaw.data);
    }
  };
  const _handleCategory = (idCategory) => {
    history.replace(`/category/products/${idCategory}`)
  }

  return (
    <>
      <div>
        <Link to="s">
          <h3 className="titleSection">Categorias</h3>
        </Link>
        <ExpansionPanelProxy items={categories} handleCategory={_handleCategory}/>
      </div>
    </>
  );
};
