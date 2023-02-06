import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavoriteElements from '../components/FavoriteElements';

class FavoriteRecipes extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="Favorite Recipes"
          haveSearch={ false }
        />
        <FavoriteElements />
        <Footer />
      </div>
    );
  }
}
export default FavoriteRecipes;
