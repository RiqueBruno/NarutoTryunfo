import React from "react";
import PropTypes from "prop-types";
import SuperTrunfo from "../../assets/Logo.png";
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
    <div className={`baseCard baseCard${cardRare} baseCard${cardTrunfo}`}>
      <div className="superTrunfo">
        {cardTrunfo ? (
          <img
            className="superTrunfoIMG"
            src={SuperTrunfo}
            alt="Super Trunfo Card"
          />
        ) : (
          ""
        )}
      </div>
      <div className="upCard">
        <div className={`cabCard cabCard${cardRare}`}>
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
            <p>POWER</p>
            <div className="atributeCard2">{cardAttr2}</div>
          </div>
          <div className="AtribCard">
            <p>HP</p>
            <div className="atributeCard3">{cardAttr3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};
