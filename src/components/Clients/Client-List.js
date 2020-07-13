import React, { useState } from "react";

import { Loader } from "../Commons/Loader";
import { TableGeneric } from "../Commons";
import { DetailClient } from "./Detail-Client";

export const ClientList = ({ clients_, clientsCount_ }) => {
  const [openModal, setopenModal] = useState(false);
  const [clientSelected, setclientSelected] = useState({});

  const state = {
    alert: {
      open: false,
    },
    columns: [
      { title: "Nombre", field: "name" },
      { title: "Ciudad", field: "city" },
      { title: "Teléfono", field: "phone" },
      { title: "Contacto", field: "contact_name" },
      { title: "Correo electrónico", field: "email" },
      { title: "Categorias", field: "category_store" },
    ],
    dataUser: [],
    showAlert: false,
    selectRegister: null,
  };

  const handleChangePage = (forward) => {
    console.log("forward: ", forward);
    // this.props.changePage(forward)
  };

  const actions = [
    // {
    //   type: "edit",
    //   title: "Editar cliente",
    // },
    {
      type: "show",
      title: "Detalle",
    },
    {
      type: "delete",
      title: "Eliminar cliente",
    },
    {
      type: "star",
      title: "Cliente estrella",
    },
  ];

  const showConfirmation = () => {};

  const showDetail = (client) => {
    console.log("OK");
    setclientSelected(client);
    setopenModal((openModal) => true);
    console.log("OK", openModal);
  };

  const hiddenDetail = (state) => {
    console.log("-", state);
    setopenModal((openModal) => state);
  };

  return (
    <div>
      {!clientsCount_ ? (
        <Loader />
      ) : (
        <>
          <div className="sub-title">
            <span className="text">Lista de Clientes</span>
          </div>
          <TableGeneric
            title=""
            columns={state.columns}
            data={clients_}
            actions={actions}
            // editItem={props.selectUpdate}
            deleteItem={showConfirmation}
            showItem={showDetail}
            // duplicateItem={props.duplicateClient}
            changePage={handleChangePage}
            count={clientsCount_}
          />
        </>
      )}
      {open && (
        <DetailClient
          openModal={openModal}
          handleCloseModal_={hiddenDetail}
          client={clientSelected}
        />
      )}
    </div>
  );
};
