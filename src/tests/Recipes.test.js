import { screen } from '@testing-library/react';
import React from 'react';
import Recipes from '../components/Recipes';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verifica se a tela de Receitas ', () => {
  test(' possui a imagem de Bebidas 1', () => {
    renderWithRouterAndRedux(<Recipes />);
    const recipeCard1 = screen.getByTestId('1-recipe-card');
    expect(recipeCard1).toBeInTheDocument();
  });
});
