import "./style.comics.scss";

// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Search from "../../components/Search/index";
import ComicsCard from "../../components/ComicsCard/index";

const Comics = ({ searchTitle, setSearchTitle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://react-marvel-backend.herokuapp.com/comics?limit=${limit}&skip=${skip}&title=${searchTitle}`
      );

      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [limit, skip, searchTitle]);

  const handleNextClick = () => {
    setLimit(limit + 15);
    setSkip(skip + 15);
  };

  const handlePreviousClick = () => {
    setLimit(limit - 15);
    setSkip(skip - 15);
  };

  return !isLoading ? (
    <div className="comics-container">
      <div className="search-container">
        <Search setSearchTitle={setSearchTitle} />
      </div>
      <div className="comics-wrapper">
        {data.map((comics, index) => {
          return <ComicsCard comics={comics} key={index} />;
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

export default Comics;
