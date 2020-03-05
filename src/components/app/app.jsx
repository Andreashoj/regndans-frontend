import React from "react";
import "./app.css";
import Login from "../login";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Login />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
