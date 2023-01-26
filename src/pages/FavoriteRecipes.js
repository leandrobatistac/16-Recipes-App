import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class FavoriteRecipes extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="Favorite Recipes"
          haveSearch={ false }
        />
        <Footer />
      </div>
    );
  }
}
export default FavoriteRecipes;
