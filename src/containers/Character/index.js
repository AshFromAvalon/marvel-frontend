import "./style.character.scss";

// Dependencies
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Card from "../../components/Card/index";

const Character = ({ saveToLocalStorage, setShowAlert }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://react-marvel-backend.herokuapp.com/comics/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const addToFav = () => {
    saveToLocalStorage({ ...data, type: "characters" }) && setShowAlert(true);
  };

  return !isLoading ? (
    <div className="character-container">
      <div className="character-wrapper">
        <img
          className="character-image"
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt=""
        />
        <div className="character-content">
          <div className="character-name">{data.name}</div>
          <div className="character-description">{data.description}</div>
          <div className="cta-fav" onClick={addToFav}>
            Ajouter à mes favoris
          </div>
        </div>
      </div>
      <div className="comics-title">
        <h2>Has appeared in:</h2>
      </div>
      <div className="comics-wrapper">
        {data.comics.map((item, index) => {
          return (
            <Card
              key={index}
              data={item}
              type="comics"
              saveToLocalStorage={saveToLocalStorage}
              setShowAlert={setShowAlert}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Character;
