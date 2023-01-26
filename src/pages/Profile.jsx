import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="Profile"
          haveSearch={ false }
        />
        <Footer />
      </div>
    );
  }
}
export default Profile;
