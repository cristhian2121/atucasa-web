import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const NotFound = () => {
  return (
    <main className="bsod container">
      <h1 className="neg title">
        <span className="bg">Error - 404</span>
      </h1>
      <p>Pagina no encontrada</p>
      <p>
        <Link to="/">* Regresar al inicio</Link>
        <br />* Send us an e-mail about this error and try later.
      </p>
      <nav className="nav">
        <a href="#" className="link">
          index
        </a>
      </nav>
    </main>
  );
};
