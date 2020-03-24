import React from "react";
import "./app.css";
import Helper from "../helper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Helper} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
