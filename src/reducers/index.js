import { combineReducers } from "redux";

import { productReducer } from "./product-reducers";
import { clientReducer } from "./client-reducers";

export default combineReducers({
  clientReducer,
  productReducer
});
