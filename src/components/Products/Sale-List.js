import React, { useEffect, useState } from "react";

import { ProductSale } from "./Product-Sale";

// import "../../styles/style.scss";
import { ActionPermPhoneMsg } from "material-ui/svg-icons";
import permPhoneMsg from "material-ui/svg-icons/action/perm-phone-msg";

export const SaleList = () => {
  const [pepes, setpepes] = useState([1, 2, 3]);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="spec ">
        <h3>Ofertas especiales</h3>
        <div className="ser-t">
          <b></b>
          <span>
            <i></i>
          </span>
          <b className="line"></b>
        </div>
      </div>
      
      <div>
        
      </div>
    </div>
  );
};
