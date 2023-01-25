import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import LoginForm from '../components/LoginForm';
import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
        <LoginForm history={ history } />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
