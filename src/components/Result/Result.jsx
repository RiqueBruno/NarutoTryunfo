import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import RankSave from "../RankSave/RankSave";
import "./Result.css";

function Result({ cardStatus }) {
  const { plrScore, compScore, totalScore } = cardStatus;
  const result = () => {
    if (plrScore > compScore) return "VITÓRIA!!!";
    if (plrScore < compScore) return "DERROTA!";
    if (plrScore == compScore) return "EMPATE.";
  };
  return (
    <div className="divResult">
      <div className="infoResult">
        <h2>{`Resultado: ${result()}`}</h2>
        <p>{`Pontuação: ${totalScore}`}</p>
      </div>
      <RankSave totalScore={totalScore} />
      <div className="panelResult">
        <Link className="Link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

Result.propTypes = {
  cardStatus: PropTypes.shape({
    plrScore: PropTypes.number.isRequired,
    compScore: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired,
  }),
};

export default Result;
