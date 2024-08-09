import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./CardFilter.css";
import { setCollectionCards } from "../../utils/CardCollectionWS";

function CardFilter({ CardsColection, setCardForm }) {  
  const hasTrunfoFunc = (arr) => arr.some((card) => card.cardTrunfo) || false;

  const deleteCard = ({ target: { id } }) => {
    const newCollection = CardsColection.find((card) => card.id !== id) || [];
    setCardForm((prevState) => ({
      ...prevState,
      CardsColection: newCollection,
      hasTrunfo: hasTrunfoFunc(newCollection),
    }));
    setCollectionCards("CardsColection", newCollection)
  };

  const editCard = ({ target: { id } }) => {
    const cardToEdit = CardsColection.filter((card) => card.id == id);
    const card = cardToEdit[0];
    
    setCardForm((prevState) => ({
      ...prevState,
      cardName: card.cardName,
      cardDescription: card.cardDescription,
      cardAttr1: card.cardAttr1,
      cardAttr2: card.cardAttr2,
      cardAttr3: card.cardAttr3,
      cardImage: card.cardImage,
      cardRare: card.cardRare,
      cardTrunfo: card.cardTrunfo,
      isEditing: true,
      cardID: card.id,
    }));
  }

  return (
    <div className="filter">
      <div className="listOfCards">
        {CardsColection.map((card, index) => (
          <div className="CardsOfList" key={index}>
            <div className="card">
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
            <div className="cardMenu">
              <button id={card.id} onClick={editCard}>
                ✏️
              </button>
              <button id={card.id} onClick={deleteCard}>
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
  setCardForm: PropTypes.func.isRequired,
};
