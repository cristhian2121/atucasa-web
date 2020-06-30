import React, { useEffect, useState } from "react";
import { getCategoryProductsService } from "../../services/Products-Service";

import { ExpansionPanelProxy } from "../../proxyes/Expansion-panel";
import style from "./style.scss";

export const CategoryBar = (props) => {

  const [categories, setCategories] = useState([])

  useEffect( async () => {
    let dataRaw;
    try {
      dataRaw = await getCategoryProductsService();
      console.log('dataRaw: ', dataRaw);
    }
    catch(err){
      console.log('err: ', err);      
    }
    if(dataRaw && dataRaw.status){
      setCategories(dataRaw.data)
    }
  }, []);
  
  return (
    <>
      <div>
        <h3 className="titleSection">Categorias</h3>
        <ExpansionPanelProxy items={categories} />
      </div>
    </>
  );
};
