import "./style.characters.scss";

// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Search from "../../components/Search/index";
import CharacterCard from "../../components/CharacterCard/index";

const Characters = ({ searchName, setSearchName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://react-marvel-backend.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${searchName}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [limit, skip, searchName]);

  const handleNextClick = () => {
    setLimit(limit + 15);
    setSkip(skip + 15);
  };

  const handlePreviousClick = () => {
    setLimit(limit - 15);
    setSkip(skip - 15);
  };

  return !isLoading ? (
    <div className="characters-container">
      <div className="search-container">
        <Search setSearchName={setSearchName} />
      </div>
      <div>{data.length}</div>
      <div className="characters-wrapper">
        {data.map((character, index) => {
          return <CharacterCard key={index} character={character} />;
        })}
      </div>
      <div>
        {limit > 15 && <button onClick={handlePreviousClick}>précédent</button>}
        {limit < 100 && data.length >= 15 && (
          <button onClick={handleNextClick}>suivant</button>
        )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Characters;
