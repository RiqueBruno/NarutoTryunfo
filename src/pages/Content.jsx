import React from "react";
import { Route, Routes } from "react-router-dom";

import Game from "./Game/Game";
import Cards from "./Collection/Collection";
import NtFound from "./NtFound";
import Home from "./Home/Home";
import Rank from "./Rank/Rank";

export default function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/collection" element={<Cards />} />
      <Route exact path="/rank" element={<Rank />} />
      <Route exact path="*" element={<NtFound />} />
    </Routes>
  );
}
