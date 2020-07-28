import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import "./style.scss";

import { Login } from "../Login/Login";
import { Loader } from "../Commons/Loader";
import { useSessionStorage } from "../../Hooks";

import { Product, IndividualProduct } from "../Products/Product";

import { GetProductNameService } from "../../services/Products-Service";
import { DeviceSignalCellularNull } from "material-ui/svg-icons";

import { clearUser } from '../../actions'

export const NavBarComponent = (props) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [listProducts, setListProducts] = useState([]);
  const [loadingSP, setLoadingSP] = useState(false);
  let history = useHistory();

  const redirectToShop = () => {
    if (props.productReducer.productsSelected.length) {
      history.push("/shopping");
    }
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      ({ target }) => {
        if (!target.closest(".dropdown")) {
          setOpenLogin(false);
          setOpenAdmin(false);
        }
      },
      []
    );
  }, []);
  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchProduct.length > 0) {
      setLoadingSP(true);
      setOpenSearch(true);
      try {
        let response = await GetProductNameService(searchProduct);
        setListProducts(response.data);
      } catch (e) {
        setListProducts([]);
        console.log("error search products:", e.response);
      }
      setLoadingSP(false);
    }
  };
  const handleCancelSearch = () => {
    setOpenSearch(false);
    setSearchProduct([]);
    setListProducts([]);
    setLoadingSP(false);
  };

  const logout = () => {
    props.RclearUser();
    history.push('/')
  }

  return (
    <>
      <div>
        <div className="header">
          <div className="container col-12">
            <div className="logo col-lg-3 col-md-12 col-sm-12">
              <h1>
                <Link to="/">
                  Nuestro Mall <span>a tu casa</span>
                </Link>
              </h1>
            </div>
            <div className="head-t nav-bar-items col-lg-6 col-md-12 col-sm-12">
              <ul className="card ">
                <li className="dropdown search-drop">
                  <div className="">
                    <TextField
                      id="outlined-search"
                      type="search"
                      variant="outlined"
                      name="searchProduct"
                      value={searchProduct}
                      onChange={(e) => setSearchProduct(e.target.value)}
                      onKeyPress={(event) => {
                        event.key === "Enter" && handleSearch(event);
                      }}
                      className="col-12"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            onClick={handleSearch}
                            className="btn-search"
                            position="start"
                          >
                            <SearchIcon />
                          </InputAdornment>
                        ),
                        endAdornment: openSearch && (
                          <InputAdornment
                            onClick={handleCancelSearch}
                            position="end"
                          >
                            <CancelRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  {openSearch && (
                    <ul className="dropdown-menu multi serch-nav multi1">
                      {listProducts.length > 0 ? (
                        listProducts.map((product) => (
                          <div
                            className="col-12 py-1 product-search"
                            key={product.id}
                          >
                            <div className="product-view product-view-nav">
                              <Product product={product} />
                            </div>
                          </div>
                        ))
                      ) : loadingSP ? (
                        <Loader hidden={!loadingSP} />
                      ) : (
                        "No se encontraron resultados"
                      )}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="head-t nav-bar-items col-lg-3 col-md-12 col-sm-12">
              <ul className="card">
                <li className="dropdown">
                  <div
                    className="cursort--point"
                    onClick={() => setOpenLogin(!openLogin)}
                  >
                    <AccountCircleOutlinedIcon color="primary" /> Mi cuenta
                  </div>
                  {openLogin && (
                    <ul className="dropdown-menu multi multi1">
                      {props.authReducer.user ? (
                        <div className="login--cerrar-session" onClick={logout}>
                          Cerrar sesión
                        </div>
                      ) : (
                        <>
                          <Login />
                          <li>
                            <Link to="client/create">
                              <ArrowForwardIcon color="secondary" /> Registrate
                            </Link>
                          </li>
                          <li>¿Olvidaste tu contraseña?</li>
                        </>
                      )}
                    </ul>
                  )}
                </li>
                {/* <li><a href="" ><i className="fa fa-user" aria-hidden="true"></i>Login</a></li> */}
                {props.authReducer.user && (
                  <li className="dropdown">
                    <div onClick={() => setOpenAdmin(!openAdmin)}>
                      <SettingsIcon color="primary" />
                      Administración
                    </div>
                    {openAdmin && (
                      <ul className="dropdown-menu multi multi1">
                        {/* <Router> */}
                        <ul className="multi-column-dropdown">
                          <li>
                            <Link to="product/create">
                              <AddCircleTwoToneIcon color="secondary" />{" "}
                              Adicionar productos
                            </Link>
                          </li>
                        </ul>
                        {/* </Router> */}
                      </ul>
                    )}
                  </li>
                )}
                <li>
                  <div className="d-flex" onClick={redirectToShop}>
                    <ShoppingCartIcon
                      style={{ color: "#e5097f", fontSize: "1.8rem" }}
                    />
                    <div className="circle">
                      {props.productReducer.productsSelected.length}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ productReducer, authReducer }) => {
  return {
    productReducer,
    authReducer,
  };
};

const mapDispatchToProps = {
  RclearUser: clearUser,
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
