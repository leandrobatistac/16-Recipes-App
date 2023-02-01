import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

export default class CardDoneMeal extends Component {
  separateTags({ strTags }) {
    const allTags = strTags.split(',');
    return (allTags);
  }

  render() {
    const { recipe, index } = this.props;
    return (
      <div>
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
              data-testid={ `${index}-horizontal-image` }
              className="cardImage"
            />
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.strCategory}
              <br />
              {recipe.strArea}
            </p>
            <p
              data-testid={
                `${index}-${this.separateTags(recipe)[0]}-horizontal-tag`
              }
            >
              {this.separateTags(recipe)[0]}
            </p>
            <p
              data-testid={
                `${index}-${this.separateTags(recipe)[1]}-horizontal-tag`
              }
            >
              {this.separateTags(recipe)[1]}
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
