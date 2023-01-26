import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoryDrinks, getDrinks } from '../helpers/fetchAPI';

class CardDrink extends Component {
  state = {
    objectDrinks: [],
    categories: [],
  };

  componentDidMount() {
    this.getObjectDrinks();
    this.getObjectCategories();
  }

  getObjectDrinks = async () => {
    const size = 12;
    const objectDrinks = await getDrinks();
    const twelveDrinks = objectDrinks.drinks.slice(0, size);
    this.setState({ objectDrinks: twelveDrinks });
  };

  getObjectCategories = async () => {
    const size = 5;
    const objectCategories = await getCategoryDrinks();
    const fiveCategories = objectCategories.drinks.slice(0, size);
    this.setState({ categories: fiveCategories });
  };

  render() {
    const { objectDrinks, categories } = this.state;
    return (
      <div>
        { categories.map((e) => (
          <button
            key={ e.strCategory }
            data-testid={ `${e.strCategory}-category-filter` }
          >
            { e.strCategory }
          </button>
        )) }

        { objectDrinks.map((e, index) => (

          <div
            data-testid={ `${index}-recipe-card` }
            key={ index }
            className="cardContainer"
          >
            <p data-testid={ `${index}-card-name` }>
              { e.strDrink }
            </p>

            <img
              alt={ e.strDrink }
              src={ e.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              className="cardImage"
            />
          </div>
        )) }
      </div>
    );
  }
}

export default connect()(CardDrink);
