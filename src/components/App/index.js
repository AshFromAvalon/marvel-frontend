import "./style.app.scss";

// Dependencies
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import Characters from "../../containers/Characters/index";
import Comics from "../../containers/Comics/index";

// Components
import Navbar from "../Navbar/index";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/">
          <Characters />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
