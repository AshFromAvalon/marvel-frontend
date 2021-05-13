import "./style.characters.scss";

// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://react-marvel-backend.herokuapp.com/characters?limit=${limit}&skip=${skip}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [limit, skip]);

  const handleNextClick = () => {
    setLimit(limit + 15);
    setSkip(skip + 15);
  };

  const handlePreviousClick = () => {
    setLimit(limit - 15);
    setSkip(skip - 15);
  };
  return !isLoading ? (
    <div style={{ display: "flex", width: "50vw", flexWrap: "wrap" }}>
      {data.map((character, index) => {
        return (
          <>
            <img
              style={{ height: 50 }}
              key={index}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
            <p>{character.name}</p>
          </>
        );
      })}

      <div>
        {limit > 15 && <button onClick={handlePreviousClick}>précédent</button>}
        {limit < 100 && <button onClick={handleNextClick}>suivant</button>}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Characters;
