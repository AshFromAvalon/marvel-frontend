import "./style.characters.scss";

// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://react-marvel-backend.herokuapp.com/characters"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return !isLoading ? (
    <div>
      {data.results.map((character, index) => {
        return (
          <img
            key={index}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt=""
          />
        );
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Characters;
