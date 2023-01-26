import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Meals extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header
          title="Meals"
          haveSearch
          history={ history }
        />
        <Footer />
      </div>
    );
  }
}
Meals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Meals;
