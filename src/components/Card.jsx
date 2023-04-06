import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="baseCard">
        <div data-testid="trunfo-card" className="superTrunfo">
          { cardTrunfo ? 'Super Trunfo' : '' }
        </div>
        <div className="upCard">
          <div className="cabCard">
            <p data-testid="rare-card" className="rarityCard">
              { cardRare }
            </p>
            <p data-testid="name-card" className="nameCard">
              { cardName }
            </p>
          </div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="imageCard"
          />
        </div>
        <div className="btpartCard">
          <div className="divDescript">
            <p
              data-testid="description-card"
              className="descriptionCard"
            >
              { cardDescription }
            </p>
          </div>
          <div className="atributeCardClass">
            <div className="AtribCard">
              <p>PODER</p>
              <div className="atributeCard1" data-testid="attr1-card">
                { cardAttr1 }
              </div>
            </div>
            <div className="AtribCard">
              <p>CHAKRA</p>
              <div className="atributeCard2" data-testid="attr2-card">
                { cardAttr2 }
              </div>
            </div>
            <div className="AtribCard">
              <p>VIDA</p>
              <div className="atributeCard3" data-testid="attr3-card">
                { cardAttr3 }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
