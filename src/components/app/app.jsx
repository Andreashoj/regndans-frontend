import React from "react";
import "./app.css";
import Helper from "../helper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login";
import FormSignUp from "../login/formSignUp";
import {makeStyles, Grid} from "@material-ui/core";
import Appbar from "../appBar";
import { ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles({
  App:{
  }
}); 


function App() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route exact path="/login/signup" component={FormSignUp} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Helper} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
