import React from "react";
import "./app.css";
import Helper from "../helper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Helper
            message="lorem ipsum message text"
            subMessage="Sub Lorem ipsum message text"
            title="Overskrift"
            subTitle="sub overskrift"
            image="https://via.placeholder.com/150"
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
