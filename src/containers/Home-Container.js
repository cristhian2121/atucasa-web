import React, { PureComponent } from "react";

import { ListProducts, NavBar } from "../components";

export class HomeContainer extends PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <ListProducts />
      </>
    );
  }
}
