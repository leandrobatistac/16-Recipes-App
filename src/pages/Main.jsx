import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Recipes />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Main;
