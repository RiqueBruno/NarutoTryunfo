import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import CardFilter from "../../components/CardFilter/CardFilter";

export default function Cards() {
  const [cardForm, setCardForm] = new useState({
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
      <div>
        <Form cardForm={cardForm} onFormChange={handleFormChange} />
        <Card cardForm={cardForm} />
      </div>
      <div>
        <CardFilter cardForm={cardForm} />
      </div>
    </div>
    //criar mais um componente para renderizar as cartas
  );
}
