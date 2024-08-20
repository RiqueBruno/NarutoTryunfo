import React from "react";
import CardPanel from "../../components/CardPanel/CardPanel";
import { getCollectionCards } from "../../utils/CardCollectionWS";
import "./Game.css";

export default function Game() {
  const collection = getCollectionCards("CardsColection");
  return (
    <div className="mainGame">
      <CardPanel collection={collection} />
    </div>
  );
}
