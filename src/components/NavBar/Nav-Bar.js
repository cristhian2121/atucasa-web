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

export const NavBarComponent = (props) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openAdmin, setOpenAdmin] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchProduct, setSearchProduct] = useState("");
  let history = useHistory();

  const redirectToShop = () => {
    if (props.productsSelected.length) {
      history.push("/shopping");
    }
  };

  useEffect(() => {

    document.addEventListener('click', ({target}) => {
      if (!target.closest('.dropdown')){
        setOpenLogin(false)
      }
    }, [])
    
  });
  const handleSearch = () => {
    if (searchProduct.length > 0) {
      props.searchProduct(searchProduct)
    }
  }

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
              <li clasName="dropdown">
                <div className="search-form">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Search..."
                    name="searchProduct"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                    onKeyPress={(event) => {
                      (event.key === "Enter") && handleSearch(event)
                    }}
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    onClick={handleSearch}
                  >
                    <SearchIcon/>
                  </button>
                </div>

                { openSearch && 
                  (<ul className="dropdown-menu multi multi1">
                    <Login />
                    <li><Link to="client/create"><ArrowForwardIcon color="secondary"/> Registrate</Link></li>
                    <li>¿Olvidaste tu contraseña?</li>
                  </ul>)
                } 		
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
                        <li><Link to="product/create"><AddCircleTwoToneIcon color="secondary"/> Adicionar productos</Link></li>                    
                      </ul>
                    {/* </Router> */}
                  </ul>)
                } 
              </li>
              <li>
                <div className="d-flex" onClick={redirectToShop}>
                  <ShoppingCartIcon style={{ color: "#e5097f", fontSize: "1.8rem" }} />
                  <div className='circle'>{props.productsSelected.length}</div>
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
