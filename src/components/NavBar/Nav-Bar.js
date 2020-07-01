import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import "./style.scss";

import {Login} from "../Login/Login"

export const NavBarComponent = ({ productsSelected }) => {
  const [openLogin, setOpenLogin] = useState(false)
  let history = useHistory();

  const redirectToShop = () => {
    if (productsSelected.length) {
      history.push("/shopping");
    }
  };

  useEffect(() => {

    document.addEventListener('click', ({target}) => {
      if (!target.closest('.dropdown')){
        setOpenLogin(false)
      }
    }, [])
    
  })

  return (
    <>
      <div>
        <div className="header">
        <div className="container col-12">			
          <div className="logo col-md-4 col-sm-12">
            <h1 ><a href="index.html">Nuestro Mall <span>a tu casa</span></a></h1>
          </div>
          <div className="head-t nav-bar-items col-md-8 col-sm-12">
            <ul className="card">
              <li>
                <div className="search-form">
                  <TextField id="outlined-basic" variant="outlined" placeholder="Search..."/>
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    <SearchIcon/>
                  </button>
                </div>		
              </li>
              <li className="dropdown">
                <div className="cursort--point" onClick={() => setOpenLogin(!openLogin)}>
                  <AccountCircleOutlinedIcon color="primary"/> Mi cuenta
                </div>
                { openLogin && 
                  (<ul className="dropdown-menu multi multi1">
                    <Login />
                  </ul>)
                }          
              </li>        
              {/* <li><a href="" ><i className="fa fa-user" aria-hidden="true"></i>Login</a></li> */}
              <li>
                <div>
                  <SettingsIcon color="primary"/>Administración
                </div>
              </li>
              <li>
                <div className="d-flex" onClick={redirectToShop}>
                  <ShoppingCartIcon className="car" />
                  <div className='circle'>{productsSelected.length}</div>
                </div>
              </li>
            </ul>	
          </div>
        </div>
      </div>		
    </div>
    </>  
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productReducer;
};

export const NavBar = connect(mapStateToProps, null)(NavBarComponent);
