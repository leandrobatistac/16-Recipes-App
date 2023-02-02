import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Profile from '../pages/Profile';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verifica se a Página de Profile', () => {
  test(' possui o Email na tela', () => {
    renderWithRouterAndRedux(<Profile />);
    const inputEmail = screen.getByTestId('profile-email');
    expect(inputEmail).toBeInTheDocument();
  });

  test(' possui o button de Done Recipes', () => {
    renderWithRouterAndRedux(<Profile />);
    const inputButtonDoneRecipes = screen.getByTestId('profile-done-btn');
    expect(inputButtonDoneRecipes).toBeInTheDocument();
  });

  test(' possui o button de Favorite Recipes', () => {
    renderWithRouterAndRedux(<Profile />);
    const inputButtonFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    expect(inputButtonFavoriteRecipes).toBeInTheDocument();
  });

  test(' possui o button de Logout', () => {
    renderWithRouterAndRedux(<Profile />);
    const inputButtonLogout = screen.getByTestId('profile-logout-btn');
    expect(inputButtonLogout).toBeInTheDocument();
  });

  test(' se é redirecionado para done recipes', () => {
    renderWithRouterAndRedux(<Profile />);
    const botao = screen.getByRole('button', { name: /done recipes/i });
    fireEvent.click(botao);
  });

  test(' se é redirecionado para favorite recipes', () => {
    renderWithRouterAndRedux(<Profile />);
    const botao = screen.getByRole('button', { name: /favorite recipes/i });
    fireEvent.click(botao);
  });

  test(' se é deslogado', () => {
    renderWithRouterAndRedux(<Profile />);
    const botao = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(botao);
    //pão
  });
});
