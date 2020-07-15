import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./style.scss";

import {Login} from "../Login/Login"

export const NavBarComponent = ({ productsSelected }) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openAdmin, setOpenAdmin] = useState(false)
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
            <h1 ><Link to="/">Nuestro Mall <span>a tu casa</span></Link></h1>
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
                    <li><Link to="client/create"><ArrowForwardIcon color="secondary"/> Registrate</Link></li>
                    <li>¿Olvidaste tu contraseña?</li>
                  </ul>)
                }          
              </li>        
              {/* <li><a href="" ><i className="fa fa-user" aria-hidden="true"></i>Login</a></li> */}
              <li className="dropdown">
                <div onClick={() => setOpenAdmin(!openAdmin)}>
                  <SettingsIcon color="primary"/>Administración
                </div>
                { openAdmin && 
                  (<ul className="dropdown-menu multi multi1">
                    {/* <Router> */}
                      <ul className="multi-column-dropdown">
                        <li><Link to="client/create"><AddCircleTwoToneIcon color="secondary"/> Adicionar productos</Link></li>                    
                      </ul>
                    {/* </Router> */}
                  </ul>)
                } 
              </li>
              <li>
                <div className="d-flex" onClick={redirectToShop}>
                  <ShoppingCartIcon style={{ color: "#e5097f", fontSize: "1.8rem" }} />
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
