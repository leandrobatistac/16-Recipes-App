import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  state = {
    search: false,
  };

  handleButtonClick = () => {
    const { search } = this.state;
    if (search === false) {
      this.setState({ search: true });
    } else { this.setState({ search: false }); }
  };

  render() {
    const { title, haveSearch, history } = this.props;
    const { search } = this.state;
    return (
      <div>
        <h1 data-testid="page-title">{ title }</h1>
        <button onClick={ () => history.push('/profile') }>
          <img data-testid="profile-top-btn" src={ profileIcon } alt="profileImg" />
        </button>
        { haveSearch
        && (
          <button onClick={ this.handleButtonClick }>
            <img data-testid="search-top-btn" src={ searchIcon } alt="seachImg" />
          </button>
        )}
        {(search) && <SearchBar />}
      </div>
    );
  }
}
Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  title: PropTypes.string,
}.isRequired;

export default Header;
