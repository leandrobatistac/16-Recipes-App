import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardDrink from '../components/CardDrink';
import CardMeal from '../components/CardMeal';
import Footer from '../components/Footer';

class Recipes extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        { history.location.pathname === '/meals' && <CardMeal /> }
        { history.location.pathname === '/drinks' && <CardDrink /> }
        <Footer />
      </div>
    );
  }
}

Recipes.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(Recipes);
