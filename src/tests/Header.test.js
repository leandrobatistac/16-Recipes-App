import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verificando Header', () => {
  it('Verificando botão de Perfil e o titulo', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');
    const botao = screen.getByTestId('login-submit-btn');

    fireEvent.change(email, {
      target: { value: 'bruna@gmail.com' },
    });
    fireEvent.change(senha, {
      target: { value: 'OPTION1' },
    });
    fireEvent.click(botao);

    const buttonProfile = screen.getByTestId('profile-top-btn');
    expect(buttonProfile).toBeInTheDocument();

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();

    fireEvent.click(buttonProfile);
  });
  test('Verificando se ao clicar no botao de pesquisa o input aparece e desaparece', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');
    const botao = screen.getByTestId('login-submit-btn');

    fireEvent.change(email, {
      target: { value: 'bruna@gmail.com' },
    });
    fireEvent.change(senha, {
      target: { value: 'OPTION1' },
    });
    fireEvent.click(botao);

    const buttonSearch = screen.getByTestId('search-top-btn');
    fireEvent.click(buttonSearch);

    const inputPesquisa = screen.getByTestId('search-input');
    expect(inputPesquisa).toBeInTheDocument();

    fireEvent.click(buttonSearch);
    expect(inputPesquisa).not.toBeInTheDocument();
  });
});
