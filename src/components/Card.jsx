import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="baseCard">
        { cardTrunfo
          ? <div className="spf" data-testid="trunfo-card">Super Trunfo</div>
          : ''}
        <article className="upCard">
          <span className="cabCard">
            <h4 data-testid="rare-card" className="rarityCard">{ cardRare }</h4>
            <h3 data-testid="name-card" className="nameCard">{ cardName }</h3>
          </span>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="imageCard"
          />
        </article>
        <article className="btpartCard">
          <span className="divDescript">
            <p
              data-testid="description-card"
              className="descriptionCard"
            >
              { cardDescription }
            </p>
          </span>
          <div className="atributeCardClass">
            <div className="AtribCard">
              <h5>PODER</h5>
              <div className="atributeCard1" data-testid="attr1-card">
                { cardAttr1 }
              </div>
            </div>
            <div className="AtribCard">
              <h5>CHAKRA</h5>
              <div className="atributeCard2" data-testid="attr2-card">
                { cardAttr2 }
              </div>
            </div>
            <div className="AtribCard">
              <h5>VIDA</h5>
              <div className="atributeCard3" data-testid="attr3-card">
                { cardAttr3 }
              </div>
            </div>
          </div>
        </article>
      </section>
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
