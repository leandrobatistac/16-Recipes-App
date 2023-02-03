import { screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verifica se a Página de Detalhes ', () => {
  test(' renderiza corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    act(() => {
      history.push('/drinks/13501');
    });

    const shareButton = screen.getByTestId('share-btn');
    expect(shareButton).toBeInTheDocument();
    userEvent.click(shareButton);
  });
});
