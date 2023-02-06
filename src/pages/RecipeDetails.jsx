import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDrinkByID, getDrinks, getMealByID, getMeals } from '../helpers/fetchAPI';
import renderItems from '../Service/renderRecipeItems';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

class RecipeDetails extends React.Component {
  state = {
    typeRecipe: '',
    objectRecipe: {},
    arrayIngredients: [],
    recomendations: [],
    buttonClick: false,
    favorite: false,
  };

  async componentDidMount() {
    const size = 20;
    const array = Array(size).fill('');

    const { match: { params: { id } }, history } = this.props;
    if (history.location.pathname.includes('/meals')) {
      const meal = await getMealByID(id);
      const recomendationsSize = 6;
      const drinksRecomendations = await getDrinks();
      const sixRecomendations = drinksRecomendations.drinks.slice(0, recomendationsSize);
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
        recomendations: sixRecomendations,
      });
    }

    if (history.location.pathname.includes('/drinks')) {
      const recomendationsSize = 6;
      const mealsRecomendations = await getMeals();
      const sixRecomendations = mealsRecomendations.meals.slice(0, recomendationsSize);
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
        recomendations: sixRecomendations,
      });
    }
  }

  shareButton = () => {
    const { history } = this.props;
    this.setState({ buttonClick: true });
    const link = history.location.pathname;
    const url = 'http://localhost:3000';
    const linkCompleto = url.concat(link);
    navigator.clipboard.writeText(linkCompleto);
  };

  favoriteItem = (objectRecipe) => {
    const oldFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const myObj = renderItems(objectRecipe);
    if (oldFavorites !== null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...oldFavorites, myObj]));
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify(myObj));
    }
    this.setState({ favorite: true });
  };

  unfavoriteItem = (objectRecipe) => {
    const oldFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const myObj = renderItems(objectRecipe);
    const newFavorites = oldFavorites.filter((recipe) => recipe.id !== myObj.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    this.setState({ favorite: false });
  };

  render() {
    const { typeRecipe,
      objectRecipe,
      arrayIngredients,
      recomendations,
      buttonClick,
      favorite } = this.state;
    const { history } = this.props;
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

        <button
          type="button"
          data-testid="share-btn"
          onClick={ this.shareButton }
        >
          Compartilhar Receita
        </button>

        { buttonClick ? <p data-testid="linkCopied">Link copied!</p> : null }

        { favorite ? (
          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ () => (
              this.unfavoriteItem(objectRecipe)
            ) }
            src={ blackHeartIcon }
          >
            <img alt="Unfavorite Item" src={ blackHeartIcon } />
          </button>
        ) : (
          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ () => (
              this.favoriteItem(objectRecipe)
            ) }
            src={ whiteHeartIcon }
          >
            <img alt="Favorite Item" src={ whiteHeartIcon } />
          </button>
        ) }

        <button
          type="button"
          data-testid="start-recipe-btn"
          className="startButton"
          onClick={ typeRecipe === 'Meal'
            ? () => history.push(`${objectRecipe.idMeal}/in-progress`)
            : () => history.push(`${objectRecipe.idDrink}/in-progress`) }
        >
          Iniciar Receita
        </button>

        <div className="carrossel">
          { recomendations.map((e, index) => (
            <div
              className="containerItem"
              key={ index }
              data-testid={ `${index}-recommendation-card` }
            >
              <img
                src={ typeRecipe === 'Meal' ? e.strDrinkThumb : e.strMealThumb }
                alt="recomendation"
                style={ {
                  maxWidth: '100px',
                } }
              />
              <p
                data-testid={ `${index}-recommendation-title` }
              >
                { typeRecipe === 'Meal'
                  ? e.strDrink
                  : e.strMeal }
              </p>
            </div>
          )) }
        </div>

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
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(RecipeDetails);
