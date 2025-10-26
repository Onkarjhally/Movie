import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo text-primary">MoVIeS</div>
      <div className="nav-link">
        <Link className="link text-info" to="/">
          Search
        </Link>
        <Link className="link text-info" to="/movies">
          Movies
        </Link>

        {/* <Link className="link" to="/favorite"> */}
          {/* Favorites */}
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
