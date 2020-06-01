import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import style from './style.scss';

export const NavBar = () => {
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
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mis pedidos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
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
        <div className="d-flex">
          <ShoppingCartIcon style={{color: '#e5097f', fontSize: '1.8rem'}} />
          <div className={style.circle}>0</div>
        </div>
      </div>
    </nav>
  );
};
