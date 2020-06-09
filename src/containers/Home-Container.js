import React, { PureComponent } from "react";

import { ListProducts, NavBar, CategoryBar, SaleList } from "../components";

export class HomeContainer extends PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <div className="col-12 px-0 d-flex flex-wrap pt-2">
          <div className="col-md-3 col-sm-12">
            <CategoryBar />
          </div>
          <div className="col-md-9 col-sm-12">
            <SaleList /><br />
            <ListProducts />
          </div>
        </div>
      </>
    );
  }
}
