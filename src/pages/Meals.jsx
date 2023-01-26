import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';

class Meals extends React.Component {
  render() {
    return (
      <div>
        <Recipes />
        <Footer />
      </div>
    );
  }
}

export default connect()(Meals);
