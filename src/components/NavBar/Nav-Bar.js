import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import style from "./style.scss";

export const NavBarComponent = ({ productsSelected }) => {
  let history = useHistory();

  const redirectToShop = () => {
    if (productsSelected.length) {
      history.push("/shopping");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">
        atucasa
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Productos <span className="sr-only">(current)</span>
            </a>
          </li>
          {productsSelected.length ? (
            <li className="nav-item">
              <Link className="nav-link" to="/shopping">
                Mis pedidos
              </Link>
            </li>
          ) : (
            ""
          )}
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Buscar
          </button>
        </form>
        <div className="d-flex align-items-center mx-2">
          <div>Mi cuenta</div>
          <AccountCircleOutlinedIcon style={{ fontSize: "1.8rem" }} />
        </div>
        <div className="d-flex" onClick={redirectToShop}>
          <ShoppingCartIcon style={{ color: "#e5097f", fontSize: "1.8rem" }} />
          <div className={style.circle}>{productsSelected.length}</div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productReducer;
};

export const NavBar = connect(mapStateToProps, null)(NavBarComponent);
