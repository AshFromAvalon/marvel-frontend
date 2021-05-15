import "./style.app.scss";

// Dependencies
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Characters from "../../containers/Characters/index";
import Character from "../../containers/Character/index";
import Comics from "../../containers/Comics/index";
import Favorites from "../../containers/Favorites/index";

// Components
import Navbar from "../Navbar/index";
import FavAlert from "../favAlert/index";

function App() {
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")) || []);
  const [showAlert, setShowAlert] = useState(false);
  const saveToLocalStorage = (data) => {
    const exist = fav.some((item) => item._id === data._id);

    if (exist) {
      alert("Alreday added to fav");
      return false;
    } else {
      const newFav = [...fav];
      newFav.push(data);
      setFav(newFav);
      localStorage.setItem("fav", JSON.stringify(newFav));
      return true;
    }
  };

  return (
    <Router>
      <Navbar setSearchTitle={setSearchTitle} setSearchName={setSearchName} />
      <FavAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      <Switch>
        <Route path="/comics/:id/">
          <Character
            saveToLocalStorage={saveToLocalStorage}
            setShowAlert={setShowAlert}
          />
        </Route>
        <Route path="/favorites/">
          <Favorites fav={fav} setFav={setFav} />
        </Route>
        <Route path="/comics/">
          <Comics
            type="comics"
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            saveToLocalStorage={saveToLocalStorage}
            setShowAlert={setShowAlert}
            limit={limit}
            setLimit={setLimit}
            skip={skip}
            setSkip={setSkip}
          />
        </Route>
        <Route path="/">
          <Characters
            type="characters"
            searchName={searchName}
            setSearchName={setSearchName}
            saveToLocalStorage={saveToLocalStorage}
            setShowAlert={setShowAlert}
            limit={limit}
            setLimit={setLimit}
            skip={skip}
            setSkip={setSkip}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
