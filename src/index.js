import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createStore } from "redux"

import { App } from "./app";
import reducer from './reducers'

const store = createStore(reducer, {})

const AppMaterial = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDom.render(<AppMaterial />, document.getElementById("app"));
