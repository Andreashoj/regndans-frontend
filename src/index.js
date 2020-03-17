import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/MuiTheme/Theme";

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
