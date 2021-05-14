import "./style.app.scss";

// Dependencies
import Cookies from "js-cookie";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import List from "../../containers/List/index";
import Character from "../../containers/Character/index";

// Components
import Navbar from "../Navbar/index";

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/comics/:id/">
          <Character />
        </Route>
        <Route path="/comics/">
          <List
            endPoint="comics"
            searchName={searchName}
            setSearchName={setSearchName}
          />
        </Route>
        <Route path="/">
          <List
            endPoint="characters"
            searchName={searchName}
            setSearchName={setSearchName}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
