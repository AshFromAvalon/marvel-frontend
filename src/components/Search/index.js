import "./style.search.scss";

// Depencies
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setSearchName, setSearchTitle, setLimit, setSkip }) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const [placeholder, setPlaceholder] = useState("Chercher par nom");

  const handleChange = (event) => {
    setLimit(15);
    setSkip(0);
    setSearchName && setSearchName(event.target.value);
    setSearchTitle && setSearchTitle(event.target.value);
  };

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Chercher");
  };

  return (
    <div className="search-box">
      <div className="search-icon">{searchIcon}</div>
      <input
        type="search"
        placeholder={placeholder}
        className="searchBar"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;
