import React from "react";
import "./app.css";
import Canvas from "../canvas";
import Helper from "../helper";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Helper message="lorem ipsum message text" subMessage="Sub Lorem ipsum message text" title="Overskrift" subTitle="sub overskrift" image="https://via.placeholder.com/150"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
