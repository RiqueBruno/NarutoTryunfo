import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";

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
      <Form cardForm={cardForm} onFormChange={handleFormChange} />
      <Card cardForm={cardForm} />
    </div>
  );
}
