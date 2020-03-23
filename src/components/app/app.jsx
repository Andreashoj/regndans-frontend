import React from "react";
import "./app.css";
import Helper from "../helper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login";
import FormSignUp from "../login/formSignUp";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login/signup" component={FormSignUp} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Helper} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
