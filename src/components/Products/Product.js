import React from "react";

import { CardProxy } from "../../proxyes";
export const Product = ({ headers, cardMedia, cardContent }) => {
  return (
    <>
      <CardProxy
        headers={headers}
        cardMedia={cardMedia}
        cardContent={cardContent}
      />
    </>
  );
};
