import PropTypes from "prop-types";
import React from "react";
import { getRank, setCollectionCards } from "../../utils/CardCollectionWS";

function RankSave({ totalScore }) {
  const onClickToSave = ({ target: { value } }) => {
    const score = totalScore || 0;
    const rank = getRank("rank");
    const newRank = [...rank, { [value]: score }];
    setCollectionCards("rank", newRank);
  };

  return (
    <div>
      <div>
        <label htmlFor="PlayerName">
          <input type="text" name="PlayerName" id="PlayerName" />
        </label>
      </div>
      <div>
        <button onClick={onClickToSave}>Save</button>
      </div>
    </div>
  );
}

RankSave.propTypes = {
  totalScore: PropTypes.number.isRequired,
};

export default RankSave;
