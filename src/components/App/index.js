import "./style.app.scss";

// Dependencies
import Cookies from "js-cookie";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import List from "../../containers/List/index";
import Character from "../../containers/Character/index";
import Favorites from "../../containers/Favorites/index";

// Components
import Navbar from "../Navbar/index";

function App() {
  const favs = localStorage.getItem("fav");

  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [fav, setFav] = useState(JSON.parse(favs) || []);
  const saveToCookie = (data) => {
    if (fav) {
      const newFav = [...fav];
      newFav.push(data);
      setFav(newFav);
      localStorage.setItem("fav", JSON.stringify(fav));
    } else {
      const newFav = [];
      newFav.push(data);
      setFav(newFav);
      localStorage.setItem("fav", JSON.stringify(fav));
    }
  };

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/comics/:id/">
          <Character />
        </Route>
        <Route path="/favorites/">
          <Favorites fav={fav} />
        </Route>
        <Route path="/comics/">
          <List
            endPoint="comics"
            searchBy="title"
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            fav={fav}
            setFav={setFav}
            saveToCookie={saveToCookie}
          />
        </Route>
        <Route path="/">
          <List
            endPoint="characters"
            searchBy="name"
            searchName={searchName}
            setSearchName={setSearchName}
            fav={fav}
            setFav={setFav}
            saveToCookie={saveToCookie}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
