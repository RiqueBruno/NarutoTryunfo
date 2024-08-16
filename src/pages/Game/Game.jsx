import React from "react";
import CardPanel from "../../components/CardPanel/CardPanel";
import { getCollectionCards } from "../../utils/CardCollectionWS";

export default function Game() {
  const collection = getCollectionCards("CardsColection");
  return (
    <div>
      <div>
        <CardPanel collection={collection} />
      </div>
    </div>
  );
}
