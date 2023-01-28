import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Recipes component', () => {
  test('Verifica se CardDrink é renderizado na rota /drinks', () => {
    act(() => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/drinks');
    });
    const cardDrink = screen.getByTestId('card-drink');
    expect(cardDrink).toBeInTheDocument();
  });

  test('Verifica se CardMeals é renderizado na rota /meals', () => {
    act(() => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/meals');
    });
    const cardMeal = screen.getByTestId('card-meal');
    expect(cardMeal).toBeInTheDocument();
  });
});
