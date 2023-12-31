import React from 'react';
import './components/App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    CardsColection: [],
  };

  hasTrunfoFunc = (card) => card.some((has) => has.cardTrunfo);

  onSaveBtnClick = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, CardsColection } = this.state;
    CardsColection.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: this.hasTrunfoFunc(CardsColection),
      isSaveButtonDisabled: true,
      CardsColection,
    });
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

  deleteC = ({ target: { id } }) => {
    let { CardsColection } = this.state;
    CardsColection = CardsColection.filter((card) => card.cardName !== id);
    this.setState({
      CardsColection,
      hasTrunfo: this.hasTrunfoFunc(CardsColection),
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, this.buttonVerify);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      CardsColection,
    } = this.state;
    return (
      <main>
        <header className="header">
          <div className="divLogo">
            <img
              src="./components/imagensP/logo.png"
              alt="Logo do site TryUnfo - Edição Naruto"
              className="imageLogo"
            />
          </div>
        </header>
        <article className="appB">
          <section className="formArea">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.onSaveBtnClick }
            />
          </section>
          <aside className="cardArea">
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
          </aside>
        </article>
        <article className="cards">
          <nav>
            <p>Coleção de Cards</p>
          </nav>
          <section className="cardList">
            {CardsColection.map((card) => (
              <div className="CardsOfList" key={ card.cardName }>
                <Card
                  className="cardArt"
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  className="lixeira"
                  id={ card.cardName }
                  data-testid="delete-button"
                  onClick={ this.deleteC }
                >
                  🗑️
                </button>
              </div>
            ))}
          </section>
        </article>
      </main>
    );
  }
}

export default App;
