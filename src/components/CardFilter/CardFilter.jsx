import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./CardFilter.css";
import { setCollectionCards } from "../../utils/CardCollectionWS";

//-----------------------------------------------
// VERIFICAR SE TEM TRUNFO - OK
// DEPOIS DISSO CRIAR O BTN DE APAGAR A CARTA
// DEPOIS O DE EDITAR
// ----------------------------------------------

function CardFilter({ CardsColection, setCardForm }) {
  const deleteCard = ({ target: { id } }) => {
    const newCollection = CardsColection.filter((card) => card.cardName !== id);
    setCardForm((prevState) => ({
      ...prevState,
      CardsColection: newCollection,
    }));
    setCollectionCards("CardsColection", newCollection)
  };

  return (
    <div className="filter">
      <div className="listOfCards">
        {CardsColection.map((card, index) => (
          <div className="CardsOfList" key={index}>
            <div>
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
            <div>
              <button id={card.cardName}>✏️</button>
              <button id={card.cardName} onClick={deleteCard}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardFilter;

CardFilter.propTypes = {
  CardsColection: PropTypes.array.isRequired,
  setCardForm: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
  }).isRequired,
};
