import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoryDrinks, getDrinks, getDrinksByCategory } from '../helpers/fetchAPI';

class CardDrink extends Component {
  state = {
    objectDrinks: [],
    categories: [],
    toggleButton: false,
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

  buttonFilterByCategory = async (category) => {
    const { toggleButton } = this.state;

    if (toggleButton === false) {
      const size = 12;
      const objectDrinks = await getDrinksByCategory(category);
      const twelveDrinks = objectDrinks.drinks.slice(0, size);
      this.setState({ objectDrinks: twelveDrinks, toggleButton: true });
    } else {
      this.getObjectDrinks();
      this.setState({ toggleButton: false });
    }
  };

  render() {
    const { objectDrinks, categories } = this.state;
    return (
      <div className="globalContainerDrinks" data-testid="card-drink">
        Drinks
        <div className="buttonContainer">
          { categories.map((e) => (
            <button
              key={ e.strCategory }
              data-testid={ `${e.strCategory}-category-filter` }
              onClick={ () => this.buttonFilterByCategory(e.strCategory) }
            >
              { e.strCategory }
            </button>
          )) }

          <button
            data-testid="All-category-filter"
            onClick={ () => this.getObjectDrinks() }
          >
            All
          </button>
        </div>

        <div className="cardContainer">
          { objectDrinks.map((e, index) => (
            <Link
              to={ `drinks/${e.idDrink}` }
              key={ e.idDrink }
            >
              <div
                data-testid={ `${index}-recipe-card` }
                key={ index }
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
            </Link>
          )) }
        </div>

      </div>
    );
  }
}

export default connect()(CardDrink);
