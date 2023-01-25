import { screen } from '@testing-library/react';
import React from 'react';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verifica se a Página de Login', () => {
  test(' possui o input de Email', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });

  test(' possui o input de Senha', () => {
    renderWithRouterAndRedux(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });

  test(' possui um Botão de Entrar', () => {
    renderWithRouterAndRedux(<Login />);
    const inputButton = screen.getByTestId('login-submit-btn');
    expect(inputButton).toBeInTheDocument();
  });
});
