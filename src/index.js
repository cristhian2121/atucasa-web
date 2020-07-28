import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createStore, applyMiddleware } from "redux";
import { SnackbarProvider, useSnackbar } from "notistack";
import thunk from "redux-thunk";

import { App } from "./app";
import reducer from "./reducers";
import "./styles/bootstrap.scss";
import "./styles/main.scss";
import "./styles/jstarbox.scss";

const store = createStore(reducer, {}, applyMiddleware(thunk));

const AppMaterial = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>
  </Provider>
);

ReactDom.render(<AppMaterial />, document.getElementById("app"));
