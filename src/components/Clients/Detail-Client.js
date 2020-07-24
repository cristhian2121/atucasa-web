import React, { useState } from "react";

import { ModalProxy } from "../../proxyes";
import { ElementDetail } from "../Commons/Detail-Element";

const ContentInfo = ({ client }) => {
  return (
    <div className="content__client">
      <p>
        Ciudad: <span>{client.city}</span>
      </p>
      <p>
        Direccion: <span>{client.address}</span>
      </p>
      <p>
        Teléfono: <span>{client.phone}</span>
      </p>
      <p>
        Contacto: <span>{client.contact_name}</span>
      </p>
      <p>
        Correo electrónico: <span>{client.email}</span>
      </p>
      <p>
        Categorias: <span>{client.category_store}</span>
      </p>
      <p>
        description: <span>{client.description}</span>
      </p>
      <p>
        Fecha de inscripción: <span>{client.date_created}</span>
      </p>
    </div>
  );
};

export const DetailClient = ({ openModal, handleCloseModal_, client }) => {
  const handleCloseModal = (state) => handleCloseModal_(state);

  return (
    <>
      <ModalProxy
        openModal={openModal}
        closeModal_={handleCloseModal}
        Container={
          <ElementDetail
            title={client.name}
            image={client.url_logo}
            Content={<ContentInfo client={client} />}
          />
        }
      />
    </>
  );
};
