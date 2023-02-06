import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      buttonDisable: true,
      loginEmail: '',
      loginPassword: '',
    };
  }

  validateEmail = (email) => {
    const result = /\S+@\S+\.\S+/;
    return result.test(email);
  };

  handleChange = ({ target: { name, value } }) => {
    const passwordSize = 6;
    this.setState({ [name]: value }, () => {
      const { loginEmail, loginPassword } = this.state;
      if (this.validateEmail(loginEmail) && loginPassword.length > passwordSize) {
        this.setState({ buttonDisable: false });
      } else {
        this.setState({ buttonDisable: true });
      }
    });
  };

  handleButton = () => {
    const { loginEmail } = this.state;
    const { history } = this.props;
    const email = {
      email: loginEmail,
    };
    localStorage.setItem('user', JSON.stringify(email));
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    history.push('/meals');
  };

  render() {
    const { buttonDisable } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="loginEmail">
            Email
            <input
              data-testid="email-input"
              id="loginEmail"
              name="loginEmail"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="loginPassword">
            Senha
            <input
              data-testid="password-input"
              id="loginPassword"
              name="loginPassword"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ buttonDisable }
            onClick={ this.handleButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(LoginForm);
