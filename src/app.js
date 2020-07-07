import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import { HomeContainer, ClientContainer } from "./containers";
import { NotFound, CreateProduct } from "./components";
import { NavBar } from "./components";

// import './styles/main.scss'

export const App = () => (
  // <HomeContainer/>
  <>
    <NavBar />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/client" component={ClientContainer} />
        <Route exact path="/product/create/" component={CreateProduct} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </>
);
