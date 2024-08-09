import React from "react";
import PropTypes from "prop-types";
import { setCollectionCards } from "../../utils/CardCollectionWS";
import { generateId } from "../../utils/GenerateID";

function Form({ cardForm, onFormChange }) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    hasTrunfo,
    isSaveButtonDisabled,
    isEditing,
    cardID,
  } = cardForm;

  const hasTrunfoFunc = (arr) => arr.some((card) => card.cardTrunfo);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    onFormChange((prevForm) => {
      const updatedForm = { ...prevForm, [name]: newValue };
      buttonVerify(updatedForm);
      return updatedForm;
    });
  };

  const buttonVerify = (stt) => {
    const maxValue = 90;
    const maxTotalValue = 210;
    const atr1 =
      Number(stt.cardAttr1) >= 0 && Number(stt.cardAttr1) <= maxValue;
    const atr2 =
      Number(stt.cardAttr2) >= 0 && Number(stt.cardAttr2) <= maxValue;
    const atr3 =
      Number(stt.cardAttr3) >= 0 && Number(stt.cardAttr3) <= maxValue;
    const atr =
      Number(stt.cardAttr1) + Number(stt.cardAttr2) + Number(stt.cardAttr3) <=
      maxTotalValue;

    const name = stt.cardName.length > 0;
    const descript = stt.cardDescription.length > 10;
    const Image = stt.cardImage.length > 0;

    const isDisabled = !(
      name &&
      Image &&
      descript &&
      atr1 &&
      atr2 &&
      atr3 &&
      atr
    );

    onFormChange((prevForm) => ({
      ...prevForm,
      isSaveButtonDisabled: isDisabled,
    }));
  };

  

  const onClickBtn = () => {
    onFormChange((prevForm) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        CardsColection,
      } = prevForm;

      const card = {
        id: generateId(cardName),
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      };

      const updatedCardsColection = [...CardsColection, card];

      const resetForm = {
        ...prevForm,
        cardName: "",
        cardDescription: "",
        cardAttr1: "",
        cardAttr2: "",
        cardAttr3: "",
        cardImage: "",
        cardRare: "normal",
        cardTrunfo: false,
        hasTrunfo: hasTrunfoFunc(updatedCardsColection),
        CardsColection: updatedCardsColection,
      };

      setCollectionCards("CardsColection", updatedCardsColection);

      return resetForm;
    });
  };

  const onClickBtnToSaveEdit = () => {
    onFormChange((prevForm) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        CardsColection,
      } = prevForm;

      const updatedCardsColection = CardsColection.map((card) => {
        if (card.id === cardID) {
          return {
            ...card,
            id: generateId(cardName),
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }
        }
        return card;
      })

      const resetForm = {
        ...prevForm,
        cardName: "",
        cardDescription: "",
        cardAttr1: "",
        cardAttr2: "",
        cardAttr3: "",
        cardImage: "",
        cardRare: "normal",
        cardTrunfo: false,
        hasTrunfo: hasTrunfoFunc(updatedCardsColection),
        CardsColection: updatedCardsColection,
      };

      setCollectionCards("CardsColection", updatedCardsColection);

      return resetForm;
    });
  };

  return (
    <div>
      <label htmlFor="cardName">
        Nome da Carta:
        <input
          onChange={handleChange}
          type="text"
          name="cardName"
          id="cardName"
          value={cardName}
        />
      </label>
      <label htmlFor="cardDescription">
        Descrição da carta:
        <textarea
          onChange={handleChange}
          name="cardDescription"
          id="cardDescription"
          value={cardDescription}
        />
      </label>
      <label htmlFor="cardAttr1">
        Atributo 1:
        <input
          onChange={handleChange}
          type="number"
          name="cardAttr1"
          id="cardAttr1"
          value={cardAttr1}
        />
      </label>
      <label htmlFor="cardAttr2">
        Atributo 2:
        <input
          onChange={handleChange}
          type="number"
          name="cardAttr2"
          id="cardAttr2"
          value={cardAttr2}
        />
      </label>
      <label htmlFor="cardAttr3">
        Atributo 3:
        <input
          onChange={handleChange}
          type="number"
          name="cardAttr3"
          id="cardAttr3"
          value={cardAttr3}
        />
      </label>
      <label htmlFor="cardImage">
        Imagem:
        <input
          onChange={handleChange}
          type="text"
          name="cardImage"
          id="cardImage"
          value={cardImage}
        />
      </label>
      <label htmlFor="cardRare">
        Raridade:
        <select
          onChange={handleChange}
          name="cardRare"
          id="cardRare"
          value={cardRare}
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
      <label htmlFor="cardTrunfo">
        Super Trunfo:
        {hasTrunfo ? (
          "Você já tem um Super Trunfo em seu baralho"
        ) : (
          <input
            onChange={handleChange}
            type="checkbox"
            name="cardTrunfo"
            id="cardTrunfo"
            checked={cardTrunfo}
          />
        )}
      </label>
        { //primeiro edita e o segundo salva
          isEditing ? (
            <button onClick={onClickBtnToSaveEdit}>
            Salvar ✏️
          </button>

          ) : (
            <button onClick={onClickBtn} disabled={isSaveButtonDisabled}>
            Salvar +
          </button>
          )
        }
    </div>
  );
}

Form.propTypes = {
  cardForm: PropTypes.shape({
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
    isEditing: PropTypes.bool.isRequired,
    cardID: PropTypes.string.isRequired,
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export default Form;
