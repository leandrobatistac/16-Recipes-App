import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import DoneRecipes from '../pages/DoneRecipes';
import data from './data/doneRecipes';

// const setLocalStorage = (key, data) => {
//   window.localStorage.setItem(key, JSON.stringify(data));
// };

describe('Testa a página DoneRecipes', () => {
  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(data));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should have the header with title and profile button', () => {
    renderWithRouterAndRedux(<DoneRecipes />);

    const title = screen.getByRole('heading', {
      name: /done recipes/i,
    });
    const profileBtn = screen.getByRole('button', {
      name: /profileimg/i,
    });

    expect(title).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
  });

  it('should have all filter buttons', () => {
    renderWithRouterAndRedux(<DoneRecipes />);

    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });
    const mealsBtn = screen.getByRole('button', {
      name: /meals/i,
    });
    const drinksBtn = screen.getByRole('button', {
      name: /drinks/i,
    });

    expect(allBtn).toBeInTheDocument();
    expect(mealsBtn).toBeInTheDocument();
    expect(drinksBtn).toBeInTheDocument();
  });

  it('should have both recipes appearing', () => {
    renderWithRouterAndRedux(<DoneRecipes />);

    const mealTitle = screen.getByText(/corba/i);
    const mealImg = screen.getByRole('img', {
      name: /corba/i,
    });
    const mealOrigin = screen.getByText(/turkish - side/i);
    const mealTags = screen.getByText(/tags:/i);
    const mealDate = screen.getByText(/feito em 2023-02-05t04:11:13\.288z/i);
    const mealBtn = screen.getByTestId('0-horizontal-share-btn');

    expect(mealTitle).toBeInTheDocument();
    expect(mealImg).toBeInTheDocument();
    expect(mealOrigin).toBeInTheDocument();
    expect(mealTags).toBeInTheDocument();
    expect(mealDate).toBeInTheDocument();
    expect(mealBtn).toBeInTheDocument();

    const drinkTitle = screen.getByText(/gg/i);
    const drinkImg = screen.getByRole('img', {
      name: /gg/i,
    });
    const drinkAlcohol = screen.getByText(/optional alcohol/i);
    const drinkDate = screen.getByText(/feito em 2023-02-05t04:11:24\.254z/i);
    const drinkBtn = screen.getByTestId('1-horizontal-share-btn');

    expect(drinkTitle).toBeInTheDocument();
    expect(drinkImg).toBeInTheDocument();
    expect(drinkAlcohol).toBeInTheDocument();
    expect(drinkDate).toBeInTheDocument();
    expect(drinkBtn).toBeInTheDocument();
  });

  it('should change according to the filter', () => {
    renderWithRouterAndRedux(<DoneRecipes />);

    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });
    const mealsBtn = screen.getByRole('button', {
      name: /meals/i,
    });
    const drinksBtn = screen.getByRole('button', {
      name: /drinks/i,
    });

    act(() => {
      userEvent.click(mealsBtn);
    });

    const mealTitle = screen.getByText(/corba/i);
    expect(mealTitle).toBeInTheDocument();

    act(() => {
      userEvent.click(drinksBtn);
    });

    const drinkTitle = screen.getByText(/gg/i);
    expect(drinkTitle).toBeInTheDocument();

    act(() => {
      userEvent.click(allBtn);
    });

    const newMealTitle = screen.getByText(/corba/i);
    const newDrinkTitle = screen.getByText(/gg/i);
    expect(newMealTitle).toBeInTheDocument();
    expect(newDrinkTitle).toBeInTheDocument();
  });
});
