import React, { useState, useEffect } from "react";

import { TableGeneric, ConfirmModal, Loader } from "../Commons";
import { TITLECONFIRMDELETE, TEXTCONFIRMDELETE } from "../../mocks";

import { DetailClient } from "./Detail-Client";

// Redux
import { connect } from "react-redux";
import { removeClient, updateClient } from "../../actions";

import {
  updateClientService,
  deleteClientService,
} from "../../services/Client-Service";

export const ClientListComponent = (props) => {
  const { clientsCount_, clients, RremoveClient, RupdateClient, loader } = props;
  const [clients_, setclient_] = useState(clients);
  const [openModal, setopenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [clientSelected, setclientSelected] = useState({});

  useEffect(() => {
    setclient_(clients);
  }, [clients]);

  const state = {
    alert: {
      open: false,
    },
    columns: [
      {
        title: "destacado",
        field: "star",
        render: (rowData) => (rowData.star ? "Si" : "No"),
      },
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
    setclientSelected(client);
    setOpenConfirm(true);
  };

  const hiddenConfirm = (state) => {
    setOpenConfirm(false);
  };

  const deleteClient = async (client) => {
    RremoveClient(client.id);
    setOpenConfirm(false);
  };

  // Show client detail
  const showDetail = (client) => {
    setclientSelected(client);
    setopenModal((openModal) => true);
  };

  const hiddenDetail = (state) => {
    setopenModal((openModal) => state);
  };

  // Star client
  const handleStarClient = (client) => {
    client.star = !client.star;
    RupdateClient(client);
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="sub-title">
            <span className="text">Listado de Clientes</span>
          </div>
          <TableGeneric
            title=""
            columns={state.columns}
            data={clients_}
            actions={actions}
            // editItem={props.selectUpdate}
            deleteItem={showConfirm}
            showItem={showDetail}
            starClient={handleStarClient}
            // duplicateItem={props.duplicateClient}
            changePage={handleChangePage}
            count={clients_.length}
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

const mapStateToProps = (reducers) => {
  return reducers.clientReducer;
};

const mapDispatchToProps = {
  RremoveClient: removeClient,
  RupdateClient: updateClient,
};

const ClientList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientListComponent);

export { ClientList };
