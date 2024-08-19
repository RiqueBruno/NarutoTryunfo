import React from "react";
import { Link } from "react-router-dom";
import bkgHome from "../../assets/bkgHome.png";

import "./Home.css";

function Home() {
  return (
    <main>
      <Link to="/game">
        <button className="btnPlay">Play</button>
      </Link>
      <img className="bkg" src={bkgHome} alt="" />
    </main>
  );
}

export default Home;
