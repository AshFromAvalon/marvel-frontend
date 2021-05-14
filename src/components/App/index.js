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
