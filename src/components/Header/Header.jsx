import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link className="imgLink" to="/">
        <img src={logo} alt="Icon Naruto Triunfo" />
      </Link>
      <nav className="navHeader">
        <Link className="linkClass" to="/">
          Home
        </Link>
        <Link className="linkClass" to="/collection">
          Collection
        </Link>
        <Link className="linkClass" to="/game">
          Play
        </Link>
        <Link className="linkClass" to="/rank">
          Rank
        </Link>
      </nav>
    </header>
  );
}

export default Header;
