import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Drinks extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="Drinks"
          haveSearch
        />
        <Footer />
      </div>
    );
  }
}
export default Drinks;
