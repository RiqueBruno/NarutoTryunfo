import React from "react";
import RankPanel from "../../components/RankPanel/RankPanel";
import { getRank } from "../../utils/CardCollectionWS";

function Rank() {
  const theRank = getRank("rank");

  return (
    <div>
      <RankPanel theRank={theRank} />
    </div>
  );
}

export default Rank;
