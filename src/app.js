import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeContainer } from "./containers";
import { NotFound } from "./components";

// import './styles/main.scss'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
