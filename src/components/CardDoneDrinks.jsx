import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

export default class CardDoneMeal extends Component {
  render() {
    const { recipe, index } = this.props;
    return (
      <div>
        <Link
          to={ `drinks/${recipe.idDrink}` }
        >
          <div
            data-testid={ `${index}-recipe-card` }
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
}
