import React from "react";
import "./app.css";
import Helper from "../helper";
import {makeStyles, Grid} from "@material-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Appbar from "../appBar";
import { ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles({
  App:{
    display: "flex",
  }
}); 


function App() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.App}>
      <Router>
        <Switch>
            <Helper message="lorem ipsum message text" subMessage="Sub Lorem ipsum message text" title="Overskrift" subTitle="sub overskrift" image="https://via.placeholder.com/150"/>
        </Switch>
        <Switch>
          <Appbar />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
