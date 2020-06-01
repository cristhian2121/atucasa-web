import React, { PureComponent } from "react";

import { ListProducts, NavBar, CategoryBar } from "../components";

export class HomeContainer extends PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <div className="col-md-12 px-0 d-flex pt-2">
          <div className="col-md-3">
            <CategoryBar />
          </div>
          <div className="col-md-9">
            <ListProducts />
          </div>
        </div>
      </>
    );
  }
}
