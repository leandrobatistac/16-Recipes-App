import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDrinkByID, getDrinks, getMealByID, getMeals } from '../helpers/fetchAPI';

class RecipeDetails extends React.Component {
  state = {
    typeRecipe: '',
    objectRecipe: {},
    arrayIngredients: [],
  };

  async componentDidMount() {
    const size = 20;
    const array = Array(size).fill('');

    const { match: { params: { id } }, history } = this.props;
    if (history.location.pathname.includes('/meals')) {
      const meal = await getMealByID(id);
      const drinksRecomendations = await getDrinks();
      const object = meal.meals[0];
      const newArray = array
        .map((_, index) => (object[`strMeasure${index + 1}`] !== null
      && object[`strIngredient${index + 1}`] !== ''
          ? [object[`strMeasure${index + 1}`],
            object[`strIngredient${index + 1}`]]
          : []));
      this.setState({
        typeRecipe: 'Meal',
        objectRecipe: object,
        arrayIngredients: newArray,
      });
    }

    if (history.location.pathname.includes('/drinks')) {
      const mealsRecomendations = await getMeals();
      const drink = await getDrinkByID(id);
      const object = drink.drinks[0];
      const newArray = array
        .map((_, index) => (object[`strMeasure${index + 1}`] !== null
      && object[`strIngredient${index + 1}`] !== ''
          ? [object[`strMeasure${index + 1}`],
            object[`strIngredient${index + 1}`]]
          : []));
      this.setState({
        typeRecipe: 'Drink',
        objectRecipe: object,
        arrayIngredients: newArray,
      });
    }
  }

  render() {
    const { typeRecipe, objectRecipe, arrayIngredients } = this.state;
    return (
      <div>
        <img
          data-testid="recipe-photo"
          src={ typeRecipe === 'Meal'
            ? objectRecipe.strMealThumb
            : objectRecipe.strDrinkThumb }
          alt={ objectRecipe.id }
          className="recipeDetailPhoto"
        />
        <p data-testid="recipe-title">
          { typeRecipe === 'Meal'
            ? objectRecipe.strMeal
            : objectRecipe.strDrink }
        </p>
        <p data-testid="recipe-category">{ objectRecipe.strCategory }</p>

        <p data-testid="recipe-category">
          { typeRecipe === 'Drink' && objectRecipe.strAlcoholic }
        </p>

        { arrayIngredients.map((e, index) => (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            { e[0] !== undefined && `${e[0]} ${e[1]}` }
          </p>
        )) }

        <p data-testid="instructions">{ objectRecipe.strInstructions }</p>

        { typeRecipe === 'Meal'
        && <iframe
          title={ objectRecipe.id }
          width="560"
          height="315"
          src={ objectRecipe && objectRecipe.strYoutube && objectRecipe.strYoutube
            .replace('watch?v=', 'embed/') }
          data-testid="video"
        /> }

      </div>
    );
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,

  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(RecipeDetails);
