import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Profile extends React.Component {
  render() {
    const user = JSON.parse(localStorage.getItem('user')) || '';
    const { history } = this.props;

    return (
      <div>
        <header>
          <Header
            title="Profile"
            haveSearch={ false }
          />
        </header>
        <div>
          <p data-testid="profile-email">{user.email}</p>
          <button
            data-testid="profile-done-btn"
            onClick={ () => history.push('/done-recipes') }
          >
            Done Recipes
          </button>
          <button
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            data-testid="profile-logout-btn"
            onClick={ () => {
              localStorage.clear();
              history.push('/');
            } }
          >
            Logout
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
