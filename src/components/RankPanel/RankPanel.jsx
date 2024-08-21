import PropTypes from "prop-types";
import React from "react";
import "./RankPanel.css";

function RankPanel({ theRank }) {
  const rank = [...theRank].sort((a, b) => b.score - a.score);

  return (
    <article className="rankPaneldiv">
      <section className="tableRank">
        <table>
          <thead>
            <tr>
              <th scope="col">POSITION</th>
              <th scope="col">PLAYER</th>
              <th scope="col">SCORE</th>
            </tr>
          </thead>
          <tbody>
            {rank.map(({ name, score }, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}

RankPanel.propTypes = {
  theRank: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      score: PropTypes.number,
    })
  ),
};

export default RankPanel;
