import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./CardFilter.css";

function CardFilter({ CardsColection }) {
  console.log(CardsColection);
  
  return (
    <div className="filter">
      <div className="listOfCards">
        {CardsColection.map((card, index) => (
          <div className="CardsOfList" key={index}>
            <Card
              cardName={card.cardName}
              cardDescription={card.cardDescription}
              cardAttr1={card.cardAttr1}
              cardAttr2={card.cardAttr2}
              cardAttr3={card.cardAttr3}
              cardImage={card.cardImage}
              cardRare={card.cardRare}
              cardTrunfo={card.cardTrunfo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardFilter;

CardFilter.propTypes = {
  CardsColection: PropTypes.array.isRequired,
};
