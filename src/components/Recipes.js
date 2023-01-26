import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardDrink from './CardDrink';
import CardMeal from './CardMeal';

class Recipes extends Component {
  render() {
    return (
      <div>
        { window.location.pathname === '/meals' && <CardMeal /> }
        { window.location.pathname === '/drinks' && <CardDrink /> }
      </div>
    );
  }
}

export default connect()(Recipes);
