import { screen } from '@testing-library/react';
import React from 'react';
import Footer from '../components/Footer';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verifica se o Footer', () => {
  test(' possui a imagem de Bebidas', () => {
    renderWithRouterAndRedux(<Footer />);
    const drinksImage = screen.getByTestId('drinks-bottom-btn');
    expect(drinksImage).toBeInTheDocument();
  });

  test(' possui a imagem de Refeições', () => {
    renderWithRouterAndRedux(<Footer />);
    const mealsImage = screen.getByTestId('meals-bottom-btn');
    expect(mealsImage).toBeInTheDocument();
  });

  test(' possui a div do container global', () => {
    renderWithRouterAndRedux(<Footer />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });
});
