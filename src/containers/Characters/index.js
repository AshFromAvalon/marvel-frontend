import "./style.characters.scss";

// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Search from "../../components/Search/index";
import Card from "../../components/Card/index";
import Loading from "../../components/Loading/index";

const Characters = ({
  limit,
  setLimit,
  skip,
  setSkip,
  searchName,
  setSearchName,
  saveToLocalStorage,
  setShowAlert,
  type,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://react-marvel-backend.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${searchName}`
        );
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
    <div className="list-container" name="top">
      <Search
        suggestions={data.map((item) => item.name)}
        setSearchName={setSearchName}
        setLimit={setLimit}
        setSkip={setSkip}
      />
      <div className="list-wrapper">
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Card
                key={index}
                data={item}
                type={type}
                saveToLocalStorage={saveToLocalStorage}
                setShowAlert={setShowAlert}
              />
            );
          })
        ) : (
          <div className="no-res">
            <p>NO RESULTS</p>
          </div>
        )}
      </div>
      <div className="btn-list-container">
        {limit > 15 && (
          <a href="#top" onClick={handlePreviousClick} className="btn-list">
            <div>{"< précédent"}</div>
          </a>
        )}
        {limit < 100 && data.length >= 15 && (
          <a href="#top" onClick={handleNextClick} className="btn-list">
            <div>{"Suivant >"}</div>
          </a>
        )}
      </div>
    </div>
  ) : (
    <div className="list-container">
      <Loading />
    </div>
  );
};

export default Characters;
