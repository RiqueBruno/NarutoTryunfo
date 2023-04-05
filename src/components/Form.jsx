import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="nameCard">
          Nome da Carta:
          <input type="text" name="" id="nameCard" data-testid="name-input" />
        </label>
        <label htmlFor="textarea">
          Descrição da carta:
          <input type="textarea" name="" id="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="atribut1">
          Atributo 1:
          <input type="number" name="" id="atribut1" data-testid="attr1-input" />
        </label>
        <label htmlFor="atribut2">
          Atributo 2:
          <input type="number" name="" id="atribut2" data-testid="attr2-input" />
        </label>
        <label htmlFor="atribut3">
          Atributo 3:
          <input type="number" name="" id="atribut3" data-testid="attr3-input" />
        </label>
        <label htmlFor="linkImg">
          Imagem:
          <input type="text" name="" id="linkImg" data-testid="image-input" />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select name="" id="raridade" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo:
          <input type="checkbox" name="" id="superTrunfo" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
