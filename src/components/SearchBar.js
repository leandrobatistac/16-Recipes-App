import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="search-input" type="text" placeholder="Search" />
        <label htmlFor="ingredient-radio">
          Ingredient
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="search-radio"
            value="ingredient"
            id="ingredient-radio"
            // onChange={ xesque }
          />
        </label>
        <label htmlFor="name-radio">
          Name of Recipe
          <input
            data-testid="name-search-radio"
            type="radio"
            name="search-radio"
            value="name"
            id="name-radio"
            // onChange={ xesque }
          />
        </label>
        <label htmlFor="first-letter-radio">
          Primeira Letra
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="search-radio"
            value="first-letter"
            id="first-letter-radio"
            // onChange={ xesque }
          />
        </label>

        <button
          data-testid="exec-search-btn"
          type="button"
        //   onClick={ handleSearch }
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default SearchBar;
