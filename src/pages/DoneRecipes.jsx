import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import shareIcon from '../images/shareIcon.svg';

class DoneRecipes extends React.Component {
  state = {
    doneRecipes: [],
    doneDrinks: [],
    doneMeals: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      doneRecipes: localStorage.getItem('doneRecipes'),
      doneDrinks: localStorage.getItem('doneRecipes').filter((recipe) => recipe.idDrink),
      doneMeals: localStorage.getItem('doneRecipes').filter((recipe) => recipe.idMeal),
    });
  }

  updateFilter(newFilter) {
    this.setState({ filter: newFilter });
  }

  render() {
    const { filter, doneRecipes, doneDrinks, doneMeals } = this.state;
    return (
      <div>
        <Header
          title="Done Recipes"
          haveSearch={ false }
        />
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => this.updateFilter('') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ () => this.updateFilter('meals') }
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => this.updateFilter('drinks') }
        >
          Drinks
        </button>
        <div>
          {
            filter === ''
              && doneRecipes.map((recipe, index) => {
                if (recipe.idDrink) {
                  return (
                    <div key={ recipe.idDrink }>
                      <Link
                        to={ `drinks/${recipe.idDrink}` }
                      >
                        <div
                          data-testid={ `${index}-recipe-card` }
                          key={ index }
                        >
                          <p data-testid={ `${index}-horizontal-name` }>
                            {recipe.strDrink}
                          </p>
                          <img
                            alt={ recipe.strDrink }
                            src={ recipe.strDrinkThumb }
                            data-testid={ `${index}-horizontal-image` }
                            className="cardImage"
                          />
                          <p data-testid={ `${index}-horizontal-top-text` }>
                            {recipe.strAlcoholic}
                          </p>
                          <p data-testid={ `${index}-horizontal-done-date` }>
                            Feito em
                            {` ${recipe.date}`}
                          </p>
                        </div>
                      </Link>
                      <button
                        data-testid={ `${index}-horizontal-share-btn` }
                        type="button"
                      >
                        <img src={ shareIcon } alt="shareImg" />
                      </button>
                    </div>
                  );
                }
                return (
                  <div key={ recipe.idMeal }>
                    <Link
                      to={ `meals/${recipe.idMeal}` }
                    >
                      <div
                        data-testid={ `${index}-recipe-card` }
                        key={ index }
                      >
                        <p data-testid={ `${index}-horizontal-name` }>
                          {recipe.strMeal}
                        </p>
                        <img
                          alt={ recipe.strMeal }
                          src={ recipe.strMealThumb }
                          data-testid={ `${index}-horizontal-image ` }
                          className="cardImage"
                        />
                        <p data-testid={ `${index}-horizontal-top-text` }>
                          {recipe.strCategory}
                          <br />
                          {recipe.strArea}
                        </p>
                        <p data-testid={ `${index}-horizontal-done-date` }>
                          Feito em
                          {` ${recipe.date}`}
                        </p>
                        <p data-testid={ `${index}-${tagName}-horizontal-tag` }>
                          {recipe.tags}
                        </p>
                      </div>
                    </Link>
                    <button
                      data-testid={ `${index}-horizontal-share-btn` }
                      type="button"
                    >
                      <img src={ shareIcon } alt="shareImg" />
                    </button>
                  </div>
                );
              })
          }
          {
            filter === 'drinks'
              && doneDrinks.map((drink) => (
                <div key={ drink.idDrink }>
                  <Link
                    to={ `drinks/${drink.idDrink}` }
                  >
                    <div
                      data-testid={ `${index}-recipe-card` }
                      key={ index }
                    >
                      <p data-testid={ `${index}-horizontal-name` }>
                        {drink.strDrink}
                      </p>
                      <img
                        alt={ drink.strDrink }
                        src={ drink.strDrinkThumb }
                        data-testid={ `${index}-horizontal-image` }
                        className="cardImage"
                      />
                      <p data-testid={ `${index}-horizontal-top-text` }>
                        {drink.strAlcoholic}
                      </p>
                      <p data-testid={ `${index}-horizontal-done-date` }>
                        Feito em
                        {` ${drink.date}`}
                      </p>
                    </div>
                  </Link>
                  <button
                    data-testid={ `${index}-horizontal-share-btn` }
                    type="button"
                  >
                    <img src={ shareIcon } alt="shareImg" />
                  </button>
                </div>
              ))
          }
          {
            filter === 'meals'
              && doneMeals.map((meal) => (
                <div key={ meal.idMeal }>
                  <Link
                    to={ `meals/${meal.idMeal}` }
                  >
                    <div
                      data-testid={ `${index}-recipe-card` }
                      key={ index }
                    >
                      <p data-testid={ `${index}-horizontal-name` }>
                        {meal.strMeal}
                      </p>
                      <img
                        alt={ meal.strMeal }
                        src={ meal.strMealThumb }
                        data-testid={ `${index}-horizontal-image` }
                        className="cardImage"
                      />
                      <p data-testid={ `${index}-horizontal-top-text` }>
                        {meal.strCategory}
                        <br />
                        {meal.strArea}
                      </p>
                      <p data-testid={ `${index}-horizontal-done-date` }>
                        Feito em
                        {` ${meal.date}`}
                      </p>
                      <p data-testid={ `${index}-${tagName}-horizontal-tag` }>
                        {meal.tags}
                      </p>
                    </div>
                  </Link>
                  <button
                    data-testid={ `${index}-horizontal-share-btn` }
                    type="button"
                  >
                    <img src={ shareIcon } alt="shareImg" />
                  </button>
                </div>
              ))
          }
        </div>
        <Footer />
      </div>
    );
  }
}
export default DoneRecipes;
