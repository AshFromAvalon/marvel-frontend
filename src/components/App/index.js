import "./style.app.scss";

// Dependencies
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import Characters from "../../containers/Characters/index";
import Character from "../../containers/Character/index";
import Comics from "../../containers/Comics/index";
import Favorites from "../../containers/Favorites/index";

// Components
import Navbar from "../Navbar/index";

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")) || []);

  const saveToCookie = (data) => {
    const exist = fav.some((item) => item._id === data._id);

    if (exist) {
      alert("Alreday added to fav");
    } else {
      const newFav = [...fav];
      newFav.push(data);
      setFav(newFav);
      localStorage.setItem("fav", JSON.stringify(newFav));
    }
  };

  return (
    <Router>
      <Navbar setSearchTitle={setSearchTitle} setSearchName={setSearchName} />

      <Switch>
        <Route path="/comics/:id/">
          <Character />
        </Route>
        <Route path="/favorites/">
          <Favorites fav={fav} />
        </Route>
        <Route path="/comics/">
          <Comics
            type="comics"
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            saveToCookie={saveToCookie}
          />
        </Route>
        <Route path="/">
          <Characters
            type="characters"
            searchName={searchName}
            setSearchName={setSearchName}
            saveToCookie={saveToCookie}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
