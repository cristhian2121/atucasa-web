import { combineReducers } from "redux";

import { productReducer } from "./product-reducers";
import { clientReducer } from "./client-reducers";
import { authReducer } from "./auth-reducers";

export default combineReducers({
  clientReducer,
  productReducer,
  authReducer, 
});
