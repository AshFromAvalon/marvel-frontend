import "./style.search.scss";

// Depencies
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({
  setSearchName,
  setSearchTitle,
  setLimit,
  setSkip,
  suggestions,
}) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const [placeholder, setPlaceholder] = useState("Chercher par nom");
  const handleFocus = () => {
    setPlaceholder("");
  };
  const handleBlur = () => {
    setPlaceholder("Chercher");
  };

  const [state, setState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });

  const {
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    userInput,
  } = state;

  useEffect(() => {
    setSearchName && setSearchName(userInput);
    setSearchTitle && setSearchTitle(userInput);
  }, [state]);

  const handleChange = (e) => {
    setLimit(15);
    setSkip(0);
    const userInput = e.target.value;
    const escaped = (word) => {
      const arr = word.split("");
      let str = "";
      arr.forEach((letter) => {
        letter === "(" || letter === ")"
          ? (str += `\\${letter}`)
          : (str += letter);
      });
      return str;
    };
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.match(escaped(userInput))
    );
    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value,
    });
  };

  const handleClick = (e) => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        filteredSuggestions: [],
        userInput: filteredSuggestions[activeSuggestion],
      });
      setSearchName && setSearchName(userInput);
      setSearchTitle && setSearchTitle(userInput);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setState({
        activeSuggestion: activeSuggestion - 1,
        showSuggestions,
        filteredSuggestions,
        userInput,
      });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setState({
        activeSuggestion: activeSuggestion + 1,
        showSuggestions,
        filteredSuggestions,
        userInput,
      });
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-icon">{searchIcon}</div>
        <input
          type="text"
          value={userInput}
          placeholder={placeholder}
          className="searchBar"
          onChange={handleChange}
          onKeyDown={handleKey}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {showSuggestions && userInput ? (
        filteredSuggestions.length ? (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li
                  key={index}
                  onClick={handleClick}
                  className={
                    index === activeSuggestion ? "suggestion-active" : ""
                  }
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        )
      ) : null}
    </div>
  );
};

export default Search;
