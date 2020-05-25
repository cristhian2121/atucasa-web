import React from "react";
import { App } from "./app";

import ReactDom from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const AppMaterial = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDom.render(<AppMaterial />, document.getElementById("app"));
