import React from "react";
import RankPanel from "../../components/RankPanel/RankPanel";
import { getRank } from "../../utils/CardCollectionWS";
import "./Rank.css";

function Rank() {
  const theRank = getRank("rank");

  return (
    <div className="rank">
      <RankPanel theRank={theRank} />
    </div>
  );
}

export default Rank;
