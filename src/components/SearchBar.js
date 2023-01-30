import React from 'react';
import { connect } from 'react-redux';
import {
  getMealsByFirstLetter,
  getMealsByName,
  getMealsByIngredients } from '../helpers/fetchAPI';

class SearchBar extends React.Component {
  state = {
    search: '',

  };

  a = () => {
    const { search, name, Ingredient, firstLetter } = this.state;
    const number = 1;

    if (name === true) {
      getMealsByName(search);
    } if (Ingredient === true) {
      getMealsByIngredients(search);
    } if (firstLetter === true) {
      search.length > number ? console.log('maior') : console.log('menor');
      //getMealsByFirstLetter(search);
      // if (search.length > number) { console.log('maior'); }
    }
    //if (search.length > number) { console.log('maior'); }
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
            name="Ingredient"
            value="ingredient"
            id="ingredient-radio"
            onChange={ (e) => this.setState({ [e.target.name]: e.target.checked }) }
          />
          Ingredient
        </label>
        <label htmlFor="name-radio">
          <input
            data-testid="name-search-radio"
            type="radio"
            name="name"
            value="name"
            id="name-radio"
            onChange={ (e) => this.setState({ [e.target.name]: e.target.checked }) }
          />
          Name
        </label>
        <label htmlFor="first-letter-radio">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="firstLetter"
            value="first-letter"
            id="first-letter-radio"
            onChange={ (e) => this.setState({ [e.target.name]: e.target.checked }) }
          />
          First letter
        </label>

        <button
          data-testid="exec-search-btn"
          type="button"
          onClick={ this.a }
          onChange={ this.a }
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default connect()(SearchBar);
