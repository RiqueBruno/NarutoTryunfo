import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="form">
        <label htmlFor="nameCard">
          Nome da Carta:
          <input
            onChange={ onInputChange }
            type="text"
            name="cardName"
            id="nameCard"
            data-testid="name-input"
            value={ cardName }
          />
        </label>
        <label htmlFor="textarea">
          Descrição da carta:
          <textarea
            onChange={ onInputChange }
            type="TextArea"
            name="cardDescription"
            id="textarea"
            data-testid="description-input"
            value={ cardDescription }
            cols="30"
            rows="3"
          />
        </label>
        <label htmlFor="atribut1">
          Poder:
          <input
            onChange={ onInputChange }
            type="number"
            name="cardAttr1"
            id="atribut1"
            data-testid="attr1-input"
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="atribut2">
          Chakra:
          <input
            onChange={ onInputChange }
            type="number"
            name="cardAttr2"
            id="atribut2"
            data-testid="attr2-input"
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="atribut3">
          Vida:
          <input
            onChange={ onInputChange }
            type="number"
            name="cardAttr3"
            id="atribut3"
            data-testid="attr3-input"
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="linkImg">
          Imagem:
          <input
            onChange={ onInputChange }
            type="text"
            name="cardImage"
            id="linkImg"
            data-testid="image-input"
            value={ cardImage }
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            onChange={ onInputChange }
            name="cardRare"
            id="raridade"
            data-testid="rare-input"
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo:
          {hasTrunfo
            ? 'Você já tem um Super Trunfo em seu baralho'
            : (
              <input
                onChange={ onInputChange }
                type="checkbox"
                name="cardTrunfo"
                id="superTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
              />
            )}
        </label>
        <button
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
        >
          Salvar

        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
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
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
