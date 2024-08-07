import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import CardFilter from "../../components/CardFilter/CardFilter";
import "./Collection.css";

export default function Collection() {
  const [cardForm, setCardForm] = useState({
    cardName: "",
    cardDescription: "",
    cardAttr1: "",
    cardAttr2: "",
    cardAttr3: "",
    cardImage: "",
    cardRare: "normal",
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    CardsColection: [],
  });

  const handleFormChange = (newCardForm) => {
    setCardForm(newCardForm);
  };

  return (
    <div>
      <div className="formBase">
        <div className="form">
          <Form cardForm={cardForm} onFormChange={handleFormChange} />
        </div>
        <div className="card">
          <Card
            cardName={cardForm.cardName}
            cardDescription={cardForm.cardDescription}
            cardAttr1={cardForm.cardAttr1}
            cardAttr2={cardForm.cardAttr2}
            cardAttr3={cardForm.cardAttr3}
            cardImage={cardForm.cardImage}
            cardRare={cardForm.cardRare}
            cardTrunfo={cardForm.cardTrunfo}
          />
        </div>
      </div>
      <div className="filterBase">
        <CardFilter CardsColection={cardForm.CardsColection} />
      </div>
    </div>
    //criar mais um componente para renderizar as cartas
  );
}
