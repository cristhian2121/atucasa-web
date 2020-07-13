import React, { useState } from "react";

import { TableGeneric, ConfirmModal, Loader } from "../Commons";
import { TITLECONFIRMDELETE, TEXTCONFIRMDELETE } from "../../mocks";

import { DetailClient } from "./Detail-Client";

import {
  updateClientService,
  deleteClientService,
} from "../../services/Client-Service";

export const ClientList = ({ clients_, clientsCount_ }) => {
  const [openModal, setopenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
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

  // Delete client

  const showConfirm = (client) => {
    console.log("Quiere borrar");
    setclientSelected(client);
    setOpenConfirm(true);
  };

  const hiddenConfirm = (state) => {
    setOpenConfirm(false);
  };

  const deleteClient = async (client) => {
    console.log("client: ", client);
    // const response = await deleteClientService(client.id);
    // console.log('response: ', response);
    clients_ = clients_.filter((_) => _.id != client.id);
    clientsCount_ -= 1;
  };

  // Show client detail
  const showDetail = (client) => {
    setclientSelected(client);
    setopenModal((openModal) => true);
  };

  const hiddenDetail = (state) => {
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
            deleteItem={showConfirm}
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
      {openConfirm && (
        <ConfirmModal
          title={`${TITLECONFIRMDELETE}`}
          text={`${TEXTCONFIRMDELETE} ##`}
          open={openConfirm}
          handleConfirm_={deleteClient}
          handleClose_={hiddenConfirm}
          data={clientSelected}
        />
      )}
    </div>
  );
};
