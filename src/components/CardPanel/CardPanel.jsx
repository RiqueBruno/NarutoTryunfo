import React, { useState } from "react";
import PropTypes from "prop-types";
import { shuffleCollection } from "../../utils/shuffleCollection";
import Card from "../Card/Card";
import Result from "../Result/Result";
import "./CardPanel.css";

function CardPanel({ collection }) {
  const [cardsPlayer, setCardsPlayer] = useState(shuffleCollection(collection));
  const [cardsComputer, setCardsComp] = useState(shuffleCollection(collection));
  const [panel, setPanel] = useState({
    turn: false,
    start: false,
    final: false,
  });
  const [cardStatus, setCardStatus] = useState({
    plrCard: cardsPlayer[0],
    plrScore: 0,
    compCard: cardsComputer[0],
    compScore: 0,
    totalScore: 0,
  });

  const updateCard = (arr, name, setName, plrSco, compSco) => {
    const newCollection = arr.slice(1);

    setName(newCollection);

    setCardStatus((prevState) => ({
      ...prevState,
      [name]: newCollection[0],
      plrScore: prevState.plrScore + plrSco,
      compScore: prevState.compScore + compSco,
      totalScore: prevState.totalScore + plrSco * 100,
    }));
  };

  const getCard = () => {
    setPanel((prevPanel) => ({ ...prevPanel, start: !prevPanel.start }));
  };

  const onClickAtribute = ({ target: { id } }) => {
    //inicio do turno
    setPanel((prevPanel) => ({ ...prevPanel, turn: !prevPanel.turn }));
    const plrCard = cardStatus.plrCard;
    const compAtr = cardStatus.compCard;

    //Verificar resultados
    if (plrCard.cardTrunfo && compAtr.cardTrunfo) {
      updateCard(cardsPlayer, "plrCard", setCardsPlayer, 1, 0);
      updateCard(cardsComputer, "compCard", setCardsComp, 0, 1);
    } else if (plrCard.cardTrunfo) {
      updateCard(cardsPlayer, "plrCard", setCardsPlayer, 1, 0);
      updateCard(cardsComputer, "compCard", setCardsComp, 0, 0);
    } else if (compAtr.cardTrunfo) {
      updateCard(cardsPlayer, "plrCard", setCardsPlayer, 0, 0);
      updateCard(cardsComputer, "compCard", setCardsComp, 0, 1);
    } else if (plrCard[id] > compAtr[id]) {
      updateCard(cardsPlayer, "plrCard", setCardsPlayer, 1, 0);
      updateCard(cardsComputer, "compCard", setCardsComp, 0, 0);
    } else if (plrCard[id] < compAtr[id]) {
      updateCard(cardsPlayer, "plrCard", setCardsPlayer, 0, 0);
      updateCard(cardsComputer, "compCard", setCardsComp, 0, 1);
    } else {
      updateCard(cardsPlayer, "plrCard", setCardsPlayer, 0, 0);
      updateCard(cardsComputer, "compCard", setCardsComp, 0, 0);
    }

    //atualizando infos e recomeçar
    if (cardsPlayer.length > 1) {
      setPanel((prevPanel) => ({
        ...prevPanel,
        start: !prevPanel.start,
        turn: !prevPanel.turn,
      }));
    } else {
      setPanel((prevPanel) => ({
        ...prevPanel,
        start: false,
        turn: false,
        final: true,
      }));
    }
  };

  return (
    <div>
      {panel.final ? <Result cardStatus={cardStatus} /> : ""}
      <div>
        <div>{cardStatus.plrScore}</div>
        <div>deck de costas</div>
        {panel.start ? (
          <div className="card-container">
            <Card
              cardName={cardStatus.plrCard.cardName}
              cardDescription={cardStatus.plrCard.cardDescription}
              cardAttr1={cardStatus.plrCard.cardAttr1.toString()}
              cardAttr2={cardStatus.plrCard.cardAttr2.toString()}
              cardAttr3={cardStatus.plrCard.cardAttr3.toString()}
              cardImage={cardStatus.plrCard.cardImage}
              cardRare={cardStatus.plrCard.cardRare}
              cardTrunfo={cardStatus.plrCard.cardTrunfo}
            />
            <div>
              <button id="cardAttr1" onClick={onClickAtribute}>
                0
              </button>
              <button id="cardAttr2" onClick={onClickAtribute}>
                0
              </button>
              <button id="cardAttr3" onClick={onClickAtribute}>
                0
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>carta de costas</div>
            <button onClick={getCard}>Get Card</button>
          </div>
        )}
      </div>

      <div>interação</div>

      <div>
        <div>{cardStatus.compScore}</div>
        <div>deck de costas</div>
        <div>
          {panel.turn ? (
            <Card
              cardName={cardStatus.compCard.cardName}
              cardDescription={cardStatus.compCard.cardDescription}
              cardAttr1={cardStatus.compCard.cardAttr1.toString()}
              cardAttr2={cardStatus.compCard.cardAttr2.toString()}
              cardAttr3={cardStatus.compCard.cardAttr3.toString()}
              cardImage={cardStatus.compCard.cardImage}
              cardRare={cardStatus.compCard.cardRare}
              cardTrunfo={cardStatus.compCard.cardTrunfo}
            />
          ) : (
            <div>Carta de costas</div>
          )}
        </div>
      </div>
      <div>{cardStatus.totalScore}</div>
    </div>
  );
}

export default CardPanel;

CardPanel.propTypes = {
  collection: PropTypes.array.isRequired,
};
