import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoryMeals, getMeals } from '../helpers/fetchAPI';

class CardMeal extends Component {
  state = {
    objectMeals: [],
    categories: [],
  };

  componentDidMount() {
    this.getObjectMeals();
    this.getObjectCategories();
  }

  getObjectMeals = async () => {
    const size = 12;
    const objectMeals = await getMeals();
    const twelveMeals = objectMeals.meals.slice(0, size);
    this.setState({ objectMeals: twelveMeals });
  };

  getObjectCategories = async () => {
    const size = 5;
    const objectCategories = await getCategoryMeals();
    const fiveCategories = objectCategories.meals.slice(0, size);
    this.setState({ categories: fiveCategories });
  };

  render() {
    const { objectMeals, categories } = this.state;
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

        { objectMeals.map((e, index) => (

          <div
            data-testid={ `${index}-recipe-card` }
            key={ index }
            className="cardContainer"
          >
            <p data-testid={ `${index}-card-name` }>
              { e.strMeal }
            </p>

            <img
              alt={ e.strMeal }
              src={ e.strMealThumb }
              data-testid={ `${index}-card-img` }
              className="cardImage"
            />
          </div>
        )) }
      </div>
    );
  }
}

export default connect()(CardMeal);
