import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
}) {
  return (
    <div className="baseCard">
      <div className="superTrunfo">{cardTrunfo ? "Super Trunfo" : ""}</div>
      <div className="upCard">
        <div className="cabCard">
          <p className="rarityCard">{cardRare}</p>
          <p className="nameCard">{cardName}</p>
        </div>
        <img src={cardImage} alt={cardName} className="imageCard" />
      </div>
      <div className="btpartCard">
        <div className="divDescript">
          <p className="descriptionCard">{cardDescription}</p>
        </div>
        <div className="atributeCardClass">
          <div className="AtribCard">
            <p>CHAKRA</p>
            <div className="atributeCard1">{cardAttr1}</div>
          </div>
          <div className="AtribCard">
            <p>FORÇA</p>
            <div className="atributeCard2">{cardAttr2}</div>
          </div>
          <div className="AtribCard">
            <p>DEFESA</p>
            <div className="atributeCard3">{cardAttr3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
