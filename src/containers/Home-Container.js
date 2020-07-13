import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import AccountCircleOutlinedIcon from '@material-ui/icons/PersonOutlineTwoTone';
import TextField from '@material-ui/core/TextField';

import { ListProducts, NavBar, CategoryBar, SaleList, BarStartClient } from "../components";

// import '../styles/base.scss'



const Nav = () => {
  return (
    <div>
    	<div className="header">
			<div className="container col-12">			
				<div className="logo col-md-4 col-sm-12">
					<h1 ><a href="index.html">Nuestro Mall <span>a tu casa</span></a></h1>
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
  render() {
    return (
      <>
        {/* <Nav /> */}
        <div className="col-12 px-0 d-flex flex-wrap pt-2">
          <div className="col-md-3 col-sm-12">
            <CategoryBar />
          </div>
          <div className="col-md-9 col-sm-12">
            <SaleList />
            <BarStartClient />
            <ListProducts />
          </div>
          {/* <Nav>
            <Switch>
              <Route exact path="/" component={SaleList} />
              <Route exact path="/product/create" component={ListProducts} />
            </Switch>
          </Nav> */}
        </div>
      </>
    );
  }
}
