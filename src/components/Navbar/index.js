import "./style.navbar.scss";

// Dependencies
import logo from "../../assets/images/Marvel_Logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setSearchName, setSearchTitle }) => {
  const location = useLocation();

  const handleClickChar = () => {
    setSearchName("");
  };
  const handleClickComics = () => {
    setSearchTitle("");
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="" className="navbar-logo" />
        </Link>
        <nav className="nav">
          <Link
            to="/"
            onClick={handleClickChar}
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Characters
          </Link>
          <Link
            to="/comics/"
            onClick={handleClickComics}
            className={
              location.pathname === "/comics/" ? "nav-link active" : "nav-link"
            }
          >
            Comics
          </Link>
          <Link
            to="/favorites/"
            className={
              location.pathname === "/favorites/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Favorites
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
