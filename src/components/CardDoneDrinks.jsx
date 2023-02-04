import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

export default class CardDoneDrinks extends Component {
  state = {
    message: false,
  };

  render() {
    const { recipe, index } = this.props;
    const { message } = this.state;
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
          onClick={ () => {
            navigator.clipboard.writeText(window.location.href
              .replace('done-recipes', `drinks/${recipe.idDrink}`));
            this.setState({ message: true });
          } }
        >
          <img src={ shareIcon } alt="shareImg" />
        </button>
        {
          message && <p>Link copied!</p>
        }
      </div>
    );
  }
}

CardDoneDrinks.propTypes = {
  recipe: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strAlcoholic: PropTypes.string,
    date: PropTypes.string,
  }),
}.isRequired;
