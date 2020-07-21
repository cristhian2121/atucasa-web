import React, { useState, useEffect } from "react";

import { TableGeneric, ConfirmModal, Loader } from "../Commons";
import { TITLECONFIRMDELETE, TEXTCONFIRMDELETE } from "../../mocks";

import {
  updateClientService,
  deleteClientService,
} from "../../services/Client-Service";
import { GetProductStoreService } from "../../services";

import { DetailProduct } from "./Detail-Product"

export const ListProductAdmin = (props) => {
  console.log("props: ", props);
  const { clientsCount_, clients, RremoveClient, RupdateClient } = props;
  const [products_, setProducts_] = useState(clients);
  const [loader, setLoader] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [clientSelected, setclientSelected] = useState({});
  const store = window.localStorage
    ? window.localStorage.getItem("store")
    : null;

  useEffect(() => {
    getProducts()
    // setProducts_(clients);
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
      { title: "Marca", field: "brand" },
      { title: "Precio", field: "price" },
      { title: "Descuento", field: "discount_porcentual" },
    ],
    dataUser: [],
    showAlert: false,
    selectRegister: null,
  };

  const getProducts = async () => {
    let dataProducts;
    let response;
    try {
      response = await GetProductStoreService(store);
      dataProducts = response.data;
    }
    catch (e) {console.log('error getproducts: ', e);}
    if (response && response.status) {
      setProducts_(dataProducts);
      setLoader(true);
    };
  }

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
      {!loader ? (
        <Loader hide={loader} />
      ) : (
        <>
          <div className="sub-title">
            <span className="text">Listado de Clientes</span>
          </div>
          <TableGeneric
            title=""
            columns={state.columns}
            data={products_}
            actions={actions}
            // editItem={props.selectUpdate}
            deleteItem={showConfirm}
            showItem={showDetail}
            starClient={handleStarClient}
            // duplicateItem={props.duplicateClient}
            changePage={handleChangePage}
            count={products_.length}
          />
        </>
      )}
      {openModal && (
        <DetailProduct
          product={products_}
          openModal={openModal}
          handleCloseModal_={hiddenDetail}
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
