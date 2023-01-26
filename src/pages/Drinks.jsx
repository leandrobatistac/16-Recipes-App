import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';

class Drinks extends React.Component {
  render() {
    return (
      <div>
        <Recipes />
        <Footer />
      </div>
    );
  }
}

export default connect()(Drinks);
