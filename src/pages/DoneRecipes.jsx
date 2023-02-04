import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import data from '../tests/data/doneRecipes';
import CardDoneMeal from '../components/CardDoneMeal';
import CardDoneDrinks from '../components/CardDoneDrinks';
import Footer from '../components/Footer';

class DoneRecipes extends React.Component {
  state = {
    doneRecipes: [],
    doneDrinks: [],
    doneMeals: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      doneRecipes: JSON.parse(localStorage.getItem('doneRecipes')),
    }, () => {
      const { doneRecipes } = this.state;
      this.setState({
        doneDrinks: doneRecipes.filter((recipe) => this.checkDrink(recipe)),
        doneMeals: doneRecipes.filter((recipe) => this.checkMeal(recipe)),
      });
      this.setState({
        doneRecipes: data,
        doneDrinks: data.filter((recipe) => this.checkDrink(recipe)),
        doneMeals: data.filter((recipe) => this.checkMeal(recipe)),
      });
    });
  }

  checkMeal({ idMeal }) {
    return (idMeal !== undefined);
  }

  checkDrink({ idDrink }) {
    return (idDrink !== undefined);
  }

  updateFilter(newFilter) {
    this.setState({ filter: newFilter });
  }

  render() {
    const { filter, doneRecipes, doneDrinks, doneMeals } = this.state;
    const { history } = this.props;
    return (
      <div>
        <Header
          title="Done Recipes"
          haveSearch={ false }
          history={ history }
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
                    <CardDoneDrinks
                      key={ recipe.idMeal }
                      recipe={ recipe }
                      index={ index }
                      history={ history }
                    />
                  );
                }
                return (
                  <CardDoneMeal
                    key={ `${recipe.idMeal} ${index}` }
                    recipe={ recipe }
                    index={ index }
                  />
                );
              })
          }
          {
            filter === 'drinks'
              && doneDrinks.map((recipe, index) => (
                <CardDoneDrinks
                  key={ recipe.idMeal }
                  recipe={ recipe }
                  index={ index }
                />
              ))
          }
          {
            filter === 'meals'
              && doneMeals.map((recipe, index) => (
                <CardDoneMeal
                  key={ recipe.idMeal }
                  recipe={ recipe }
                  index={ index }
                />
              ))
          }
        </div>
        <Footer />
      </div>
    );
  }
}

DoneRecipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default DoneRecipes;
