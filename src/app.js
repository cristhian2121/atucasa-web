import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import { HomeContainer } from "./containers";
import { NotFound } from "./components";
import { CreateProduct } from "./components/Products/Create-Product";
import { NavBar } from "./components";

// import './styles/main.scss'

export const App = () => (
  // <HomeContainer/>
  <>
  <NavBar />
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/product/create/" component={CreateProduct} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
  </>
);
