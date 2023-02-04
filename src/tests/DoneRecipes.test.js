import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import DoneRecipes from '../pages/DoneRecipes';

describe('Testa a página DoneRecipes', () => {
  it('should render the Header', () => {
    renderWithRouterAndRedux(<DoneRecipes />);
    
  });
});
