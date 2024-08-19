import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import CardFilter from "../../components/CardFilter/CardFilter";
import { getCollectionCards } from "../../utils/CardCollectionWS";
import "./Collection.css";

export default function Collection() {
  const [cardForm, setCardForm] = useState({
    cardName: "",
    cardDescription: "",
    cardAttr1: "",
    cardAttr2: "",
    cardAttr3: "",
    cardImage: "",
    cardRare: "Normal",
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    CardsColection: [],
    isEditing: false,
    cardID: "",
  });

  const handleFormChange = (newCardForm) => {
    setCardForm(newCardForm);
  };

  useEffect(() => {
    const initializeCardCollection = () => {
      const collection = getCollectionCards("CardsColection");
      setCardForm((prevState) => ({
        ...prevState,
        CardsColection: collection,
      }));
    };

    initializeCardCollection();
  }, []);

  return (
    <div className="collection">
      <div className="formBase">
        <div className="form">
          <h1>Add a new Card</h1>
          <Form cardForm={cardForm} onFormChange={handleFormChange} />
        </div>
        <div className="card">
          <h2>Preview</h2>
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
        <CardFilter
          CardsColection={cardForm.CardsColection}
          setCardForm={setCardForm}
        />
      </div>
      <div className="bol b1" />
      <div className="bol b2" />
      <div className="bol b3" />
    </div>
  );
}
