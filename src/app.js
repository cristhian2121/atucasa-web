import React from "react";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

import { HomeContainer, ClientContainer } from "./containers";
import { NotFound, CreateProduct } from "./components";
import { NavBar } from "./components";
import { CreateClient } from "./components/Clients/Create-Client"

// import './styles/main.scss'

export const App = () => (
  // <HomeContainer/>
  <>
  <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/client" component={ClientContainer} />
      <Route exact path="/product/create/" component={CreateProduct} />
      <Route exact path="/client/create/" component={CreateClient} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
  </>
);
