import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import AccountCircleOutlinedIcon from "@material-ui/icons/PersonOutlineTwoTone";
import TextField from "@material-ui/core/TextField";

import { ProductByCategory } from "../components";
import {
  ListProducts,
  NavBar,
  CategoryBar,
  SaleList,
  BarStartClient,
  Loader,
} from "../components";
import {
  GetProductService,
  GetProductCategoryService,
  getCategoryProductsService,
} from "../services/Products-Service";

// import '../styles/base.scss'

const Nav = () => {
  return (
    <div>
      <div className="header">
        <div className="container col-12">
          <div className="logo col-md-4 col-sm-12">
            <h1>
              <a href="index.html">
                Nuestro Mall <span>a tu casa</span>
              </a>
            </h1>
          </div>
          <div className="head-t nav-bar-items col-md-8 col-sm-12">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loader: true,
    };
    this.getCategories = this.getCategories.bind(this);
  }

  async componentDidMount() {
    await this.getCategories();
  }

  async getCategories() {
    let dataRaw;
    try {
      dataRaw = await getCategoryProductsService();
    } catch (err) {
      console.log("err: ", err);
    }
    if (dataRaw && dataRaw.status) {
      this.setState({
        categories: dataRaw.data,
        loader: false,
      });
    }
  }

  // async getCategoryProduct(idCategoryProduct) {
  //   try {
  //     // Request of products for categories
  //     let response = await GetProductCategoryService(idCategoryProduct);
  //     let resp = response.data;
  //     this.setState({
  //       products: resp,
  //     });
  //   } catch (e) {
  //     console.log("error get product for categories: ", e);
  //   }
  // }

  render() {
    return (
      <>
        {this.state.loader ? (
          <Loader hidden={!this.state.loader} />
        ) : (
          <div className="col-12 px-0 d-flex flex-wrap pt-2">
            <div className="col-md-3 col-sm-12">
              <CategoryBar handleCategory={this.getCategoryProduct} />
            </div>
            <div className="col-md-9 col-sm-12">
              <SaleList />
              <BarStartClient />
              <ProductByCategory categories={this.state.categories} />
            </div>
          </div>
        )}
      </>
    );
  }
}
