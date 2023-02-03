import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class DoneRecipes extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="Done Recipes"
          haveSearch={ false }
        />
        <Footer />
      </div>
    );
  }
}
export default DoneRecipes;
