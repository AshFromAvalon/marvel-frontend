import "./style.navbar.scss";

import logo from "../../assets/images/Marvel_Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="" className="navbar-logo" />
      </div>
    </div>
  );
};

export default Navbar;
