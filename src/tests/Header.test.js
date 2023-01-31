import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verificando Header', () => {
  it('Verificando botão de Perfil e o titulo', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByRole('textbox', { name: /email/i });
    const senha = screen.getByRole('textbox', { name: /senha/i });
    const botao = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(email, {
      target: { value: 'breno@gmail.com' },
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

    const email = screen.getByRole('textbox', { name: /email/i });
    const senha = screen.getByRole('textbox', { name: /senha/i });
    const botao = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(email, {
      target: { value: 'bruno@gmail.com' },
    });
    fireEvent.change(senha, {
      target: { value: 'OPTION1' },
    });
    fireEvent.click(botao);

    const buttonSearch = screen.getByRole('img', { name: /seachimg/i });
    fireEvent.click(buttonSearch);

    const inputPesquisa = screen.getByRole('textbox');
    expect(inputPesquisa).toBeInTheDocument();

    fireEvent.click(buttonSearch);
    expect(inputPesquisa).not.toBeInTheDocument();
  });
  test('Verificando os botão radio Ingrediente', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByRole('textbox', { name: /email/i });
    const senha = screen.getByRole('textbox', { name: /senha/i });
    const botao = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(email, {
      target: { value: 'bruno@gmail.com' },
    });
    fireEvent.change(senha, {
      target: { value: 'OPTION1' },
    });
    fireEvent.click(botao);
    const buttonSearch = screen.getByRole('img', { name: /seachimg/i });
    fireEvent.click(buttonSearch);

    const search = screen.getByRole('textbox');
    const radiosIngredient = screen.getByText(/ingredient/i);
    const btnBusca = screen.getByTestId('exec-search-btn');

    fireEvent.change(search, { target: { value: 'egg' } });
    fireEvent.click(radiosIngredient);
    fireEvent.click(btnBusca);
  });
  test('Verificando os botão radio name', () => {
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

    const search = screen.getByTestId('search-input');
    const radioName = screen.getByText(/name/i);
    const btnBusca = screen.getByRole('button', { name: /buscar/i });

    fireEvent.change(search, { target: { value: 'egg' } });
    fireEvent.click(radioName);
    fireEvent.click(btnBusca);
  });
  test('Verificando os botão radio First letter', () => {
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
    const search = screen.getByTestId('search-input');
    const radioFirst = screen.getByText(/first letter/i);
    const btnBusca = screen.getByRole('button', { name: /buscar/i });

    fireEvent.change(search, { target: { value: 'e' } });
    fireEvent.click(radioFirst);
    fireEvent.click(btnBusca);
  });
});
