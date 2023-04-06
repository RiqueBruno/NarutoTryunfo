import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// começando
class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: 'true',
  };

  buttonVerify = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const maxValue = 90;
    const maxTotalValue = 210;
    const atr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxValue;
    const atr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxValue;
    const atr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxValue;
    const name = cardName.length > 0;
    const descript = cardDescription.length > 0;
    const rarity = cardRare.length > 0;
    const Image = cardImage.length > 0;
    const atr = Number(cardAttr1) + Number(cardAttr2)
      + Number(cardAttr3) <= maxTotalValue;
    this.setState({
      isSaveButtonDisabled: !(name && rarity
         && Image && descript && atr1 && atr2 && atr3 && atr),
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, this.buttonVerify);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ () => console.log('Salvou') }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
