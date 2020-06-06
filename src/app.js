import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeContainer } from "./containers";
import { NotFound } from "./components";
import { CreateProduct } from "./components/Products/Create-Product";


// import './styles/main.scss'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/create" component={CreateProduct} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
