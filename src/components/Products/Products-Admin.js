import React, { useState, useEffect } from "react";

import { TableGeneric, ConfirmModal, Loader } from "../Commons";
import { TITLECONFIRMDELETE, TEXTCONFIRMDELETE } from "../../mocks";

import { useSnackbar } from "notistack";
import {
  GetProductStoreService,
  deleteProductService,
  updateProductService,
} from "../../services";

import { DetailProduct } from "./Detail-Product";
import { connect } from "react-redux";

const ListProductAdminComponent = (props) => {
  const { clients, user } = props;
  const [products_, setProducts_] = useState(clients);
  const [loader, setLoader] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [productSelected, setProductSelected] = useState({});
  const [actions, setActions] = useState([
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
  ]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getProducts();
    if (user && user.groups[0]) {
      const actionsAux = actions.filter((_) => _.type != "star");
      setActions(actionsAux);
    }
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
      response = await GetProductStoreService(user.store);
      dataProducts = response.data;
    } catch (e) {
      console.log("error getproducts: ", e);
    }
    if (response && response.status) {
      setProducts_(dataProducts);
      setLoader(true);
    }
  };

  const handleChangePage = (forward) => {
    // this.props.changePage(forward)
  };

  // Delete client

  const showConfirm = (product) => {
    setProductSelected(product);
    setOpenConfirm(true);
  };

  const hiddenConfirm = (state) => {
    setOpenConfirm(false);
  };

  const deleteProduct = async () => {
    let response;
    let id = productSelected.id;
    try {
      response = await deleteProductService(id);
    } catch (error) {
      enqueueSnackbar("No se pudo eliminar el registro, vuelva a intentarlo.", {
        variant: "error",
      });
    }
    if (response && response.status) {
      enqueueSnackbar("El registro se eliminó correctamente.", {
        variant: "success",
      });
      _deleteProduct(id);
    }
  };

  const _deleteProduct = (id) => {
    let products_tmp = products_.filter((obj) => obj.id != id);
    setProducts_(products_tmp);
    setOpenConfirm(false);
  };

  // Show client detail
  const showDetail = (product) => {
    setProductSelected(product);
    setopenModal((openModal) => true);
  };

  const hiddenDetail = (state) => {
    setopenModal((openModal) => state);
  };

  // Star client
  const handleStarClient = (product) => {
    product.star = !product.star;
    updateProduct(product);
  };

  const updateProduct = async (product) => {
    let dataUpdate;
    let response;
    try {
      response = await updateProductService(product.id, product);
      dataUpdate = response.data;
    } catch (error) {
      enqueueSnackbar(
        "No se pudo actualizar el registro, vuelva a intentarlo.",
        { variant: "error" }
      );
    }
    if (response && response.status) {
      enqueueSnackbar("El registro se actualizó correctamente.", {
        variant: "success",
      });
      _updateProduct(product);
    }
  };

  const _updateProduct = (dataProduct) => {
    let products_tmp = products_.filter((obj) => obj.id != dataProduct.id);
    let products = [...products_tmp, dataProduct];
    setProducts_(products);
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
          product={productSelected}
          openModal={openModal}
          handleCloseModal_={hiddenDetail}
        />
      )}
      {openConfirm && (
        <ConfirmModal
          title={`${TITLECONFIRMDELETE}`}
          text={`${TEXTCONFIRMDELETE}`}
          open={openConfirm}
          handleConfirm_={deleteProduct}
          handleClose_={hiddenConfirm}
          data={productSelected}
        />
      )}
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.authReducer;
};

export const ListProductAdmin = connect(
  mapStateToProps,
  null
)(ListProductAdminComponent);
