import React from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

class FavoriteElements extends React.Component {
  state = {
    type: '',
    card: true,
  };

  share = async (type, id) => {
    const link = `http://localhost:3000/${type}-${id}`;
    navigator.clipboard.writeText(link);
    return <span>Link copied!</span>;
  };

  cardFood = () => {
    const favorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

    favorite.map((e, index) => {
      const cardElement = (
        <div key={ e.index + e.name }>
          <h3 data-testid={ `${index}-horizontal-name` }>{e.name}</h3>
          <img
            src={ e.image }
            alt={ e.name }
            data-testid={ `${index}-horizontal-image` }
            height="100px"
            width="100px"
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{e.category}</p>
          <p data-testid={ `${index}-horizontal-top-text` }>{e.nationality}</p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ this.share(e.type, e.id) }
          >
            <img src={ shareIcon } alt="compartilhar" />
          </button>
          <button
            type="radio"
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            <img src={ blackHeartIcon } alt="desfavoritar" />
          </button>
        </div>);
      return cardElement;
    });
  };

  cardDrink = () => {
    const favorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

    favorite.map((e, index) => {
      const cardElement = (
        <div key={ e.index + e.name }>
          <h3 data-testid={ `${index}-horizontal-name` }>{e.name}</h3>
          <img
            src={ e.image }
            alt={ e.name }
            data-testid={ `${index}-horizontal-image` }
            height="100px"
            width="100px"
          />
          <p data-testid={ `${index}-horizontal-top-text ` }>{e.alcoholicOrNot}</p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ this.share(e.type, e.id) }
          >
            <img src={ shareIcon } alt="compartilhar" />
          </button>
          <button
            type="radio"
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            <img src={ blackHeartIcon } alt="desfavoritar" />
          </button>
        </div>);
      return cardElement;
    });
  };

  card = () => {
    // const favorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    // favorite.filter((e) => this.setState({ type: e.type }));
    // favorite.map((e, index) => {
    //   const cardElement = (
    //     <div key={ e.index + e.name }>
    //       <h3 data-testid={ `${index}-horizontal-name` }>{e.name}</h3>
    //       <img
    //         src={ e.image }
    //         alt={ e.name }
    //         data-testid={ `${index}-horizontal-image` }
    //       />
    //       <p data-testid={ `${index}-horizontal-top-text` }>{e.category}</p>
    //       <button
    //         type="button"
    //         data-testid={ `${index}-horizontal-share-btn` }
    //       >
    //         compartilhar

    //       </button>
    //       <button
    //         type="radio"
    //         data-testid={ `${index}-horizontal-favorite-btn` }
    //       >
    //         Favorito
    //       </button>
    //     </div>);
    //   return cardElement;
    // });
    this.cardDrink();
    this.cardFood();
  };

  render() {
    const { type, card } = this.state;
    return (
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ () => this.setState({ type: 'meals', card: false }) }
        >
          Meals

        </button>
        <button
          type='button data-testid="filter-by-drink-btn'
          onClick={ () => this.setState({ type: 'drinks', card: false }) }
        >
          Drinks

        </button>
        {card && this.card()}
        {type === 'drinks' ? this.cardDrink() : this.cardFood()}
      </div>

    );
  }
}

export default FavoriteElements;
