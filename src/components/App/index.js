import "./style.app.scss";

// Dependencies
import Cookies from "js-cookie";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import Characters from "../../containers/Characters/index";
import Comics from "../../containers/Comics/index";

// Components
import Navbar from "../Navbar/index";

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/comics">
          <Comics searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
        </Route>
        <Route path="/">
          <Characters searchName={searchName} setSearchName={setSearchName} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
