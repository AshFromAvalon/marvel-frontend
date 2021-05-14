import "./style.list.scss";

// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Search from "../../components/Search/index";
import Card from "../../components/Card/index";

const Characters = ({
  searchName,
  setSearchName,
  searchTitle,
  setSearchTitle,
  endPoint,
  searchBy,
  saveToCookie,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://react-marvel-backend.herokuapp.com/${endPoint}?limit=${limit}&skip=${skip}&${searchBy}=${
            searchBy === "name" ? searchName : searchTitle
          } `
        );
        console.log(data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [limit, skip, searchName, endPoint]);

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
      <div className="search-container">
        <Search
          setSearchName={setSearchName}
          setSearchTitle={setSearchTitle}
          searchBy={searchBy}
        />
      </div>
      <div className="list-wrapper">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              data={item}
              type={endPoint}
              saveToCookie={saveToCookie}
            />
          );
        })}
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
    <div>Loading...</div>
  );
};

export default Characters;
