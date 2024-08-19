import PropTypes from "prop-types";
import React, { useState } from "react";
import { getRank, setCollectionCards } from "../../utils/CardCollectionWS";

function RankSave({ totalScore }) {
  const [name, setName] = useState("");
  const [save, setSave] = useState(false);

  const onClickToSave = () => {
    const score = Number(totalScore) || 0;
    const nName = name || "noName";

    const rank = getRank("rank");
    const newRank = [...rank, { name: nName, score }];

    setCollectionCards("rank", newRank);
    setSave((prevSave) => !prevSave);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </label>
      </div>
      <div>
        {save ? (
          <p>Salvo com Sucesso!</p>
        ) : (
          <button onClick={onClickToSave}>Save</button>
        )}
      </div>
    </div>
  );
}

RankSave.propTypes = {
  totalScore: PropTypes.number.isRequired,
};

export default RankSave;
