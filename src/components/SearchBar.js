import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getMealsByFirstLetter,
  getMealsByName,
  getMealsByIngredients,
  getDrinksByIngredients,
  getDrinksByName,
  getDrinksByFirstLetter } from '../helpers/fetchAPI';

class SearchBar extends React.Component {
  state = {
    search: '',

  };

  queryApiDrinks = () => {
    const { search, name, Ingredient, firstLetter } = this.state;
    const { history } = this.props;
    const number = 1;

    if (history.location.pathname === '/drinks') {
      if (name === true) {
        getDrinksByName(search);
      } if (Ingredient === true) {
        getDrinksByIngredients(search);
      } if (firstLetter === true) {
        return search.length > number
          ? global.alert('Your search must have only 1 (one) character')
          : getDrinksByFirstLetter(search);
      }
    }
  };

  queryApi = () => {
    const { search, name, Ingredient, firstLetter } = this.state;
    const { history } = this.props;
    const number = 1;
    if (history.location.pathname === '/meals') {
      if (name === true) {
        getMealsByName(search);
      } if (Ingredient === true) {
        getMealsByIngredients(search);
      } if (firstLetter === true) {
        return search.length > number
          ? global.alert('Your search must have only 1 (one) character')
          : getMealsByFirstLetter(search);
      }
    }
    this.queryApiDrinks();
  };

  render() {
    return (
      <div>
        <input
          data-testid="search-input"
          type="text"
          name="search"
          placeholder="Search"
          onChange={ (e) => this.setState({ [e.target.name]: e.target.value }) }
        />
        <label htmlFor="ingredient-radio">

          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="radioSearch"
            value="ingredient"
            id="ingredient-radio"
            onChange={ (e) => this.setState({ Ingredient: e.target.checked }) }
          />
          Ingredient
        </label>
        <label htmlFor="name-radio">
          <input
            data-testid="name-search-radio"
            type="radio"
            name="radioSearch"
            value="name"
            id="name-radio"
            onChange={ (e) => this.setState({ name: e.target.checked }) }
          />
          Name
        </label>
        <label htmlFor="first-letter-radio">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="radioSearch"
            value="first-letter"
            id="first-letter-radio"
            onChange={ (e) => this.setState({ firstLetter: e.target.checked }) }
          />
          First letter
        </label>

        <button
          data-testid="exec-search-btn"
          type="button"
          onClick={ this.queryApi }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connect()(SearchBar);
