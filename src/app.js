import React from "react";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

import { HomeContainer, ClientContainer, ClientContainerList } from "./containers";
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
      <Route exact path="/client" component={ClientContainerList} />
      <Route exact path="/client/amor" component={ClientContainer} />
      <Route exact path="/product/create/" component={CreateProduct} />
      <Route exact path="/client/create/" component={ClientContainer} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
  </>
);
