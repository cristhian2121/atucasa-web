import React from "react";
import "./style.scss";

export const Loader = ({ hidden }) => {
  {
    return !hidden && <div className="loader-kr">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>;
  }
};
