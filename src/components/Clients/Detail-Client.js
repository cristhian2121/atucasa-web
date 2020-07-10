import React, { useState } from "react";

import { ModalProxy } from "../../proxyes";
import { ElementDetail } from "../Commons/Detail-Element";

export const DetailClient = ({ openModal, handleCloseModal_, client }) => {
  console.log("client: ", client);
  const handleCloseModal = (state) => handleCloseModal_(state);

  return (
    <>
      <ModalProxy
        openModal={openModal}
        closeModal_={handleCloseModal}
        Container={<ElementDetail title={client.name} />}
      />
    </>
  );
};
