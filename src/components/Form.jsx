import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <label htmlFor="nameCard">
          Nome da Carta:
          <input
            onChange={ onInputChange }
            type="text"
            name=""
            id="nameCard"
            data-testid="name-input"
            value={ cardName }
          />
        </label>
        <label htmlFor="textarea">
          Descrição da carta:
          <input
            onChange={ onInputChange }
            type="textarea"
            name=""
            id="textarea"
            data-testid="description-input"
            value={ cardDescription }
          />
        </label>
        <label htmlFor="atribut1">
          Atributo 1:
          <input
            onChange={ onInputChange }
            type="number"
            name=""
            id="atribut1"
            data-testid="attr1-input"
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="atribut2">
          Atributo 2:
          <input
            onChange={ onInputChange }
            type="number"
            name=""
            id="atribut2"
            data-testid="attr2-input"
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="atribut3">
          Atributo 3:
          <input
            onChange={ onInputChange }
            type="number"
            name=""
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
            name=""
            id="linkImg"
            data-testid="image-input"
            value={ cardImage }
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            onChange={ onInputChange }
            name=""
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
          <input
            onChange={ onInputChange }
            type="checkbox"
            name=""
            id="superTrunfo"
            data-testid="trunfo-input"
            value={ cardTrunfo }
          />
        </label>
        <button
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar

        </button>
      </div>
    );
  }
}

export default Form;

Form.protoType = {
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
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};
