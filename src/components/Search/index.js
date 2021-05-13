import "./style.search.scss";

const Search = ({ setSearchName, setSearchTitle }) => {
  const handleChange = (event) => {
    setSearchName && setSearchName(event.target.value);
    setSearchTitle && setSearchTitle(event.target.value);
  };

  return (
    <input
      type="search"
      className="searchBar"
      onChange={(event) => handleChange(event)}
    />
  );
};

export default Search;
