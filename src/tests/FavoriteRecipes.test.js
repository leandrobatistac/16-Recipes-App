import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import data from './data/favoriteRecipes';

describe('Testa a página FavoriteRecipes', () => {
  beforeEach(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(data));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should have the header with title and profile button', () => {
    renderWithRouterAndRedux(<FavoriteRecipes />);

    const title = screen.getByRole('heading', {
      name: /favorite recipes/i,
    });
    const profileBtn = screen.getByRole('button', {
      name: /profileimg/i,
    });

    expect(title).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
  });

  it('should have all filter buttons', () => {
    renderWithRouterAndRedux(<FavoriteRecipes />);

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
    renderWithRouterAndRedux(<FavoriteRecipes />);

    const mealTitle = screen.getByText(/corba/i);
    const mealImg = screen.getByRole('img', {
      name: /corba/i,
    });
    const mealOrigin = screen.getByText(/turkish - side/i);
    const mealBtn = screen.getByTestId('0-horizontal-share-btn');

    expect(mealTitle).toBeInTheDocument();
    expect(mealImg).toBeInTheDocument();
    expect(mealOrigin).toBeInTheDocument();
    expect(mealBtn).toBeInTheDocument();

    const drinkTitle = screen.getByText(/gg/i);
    const drinkImg = screen.getByRole('img', {
      name: /gg/i,
    });
    const drinkAlcohol = screen.getByText(/optional alcohol/i);
    const drinkBtn = screen.getByTestId('1-horizontal-share-btn');

    expect(drinkTitle).toBeInTheDocument();
    expect(drinkImg).toBeInTheDocument();
    expect(drinkAlcohol).toBeInTheDocument();
    expect(drinkBtn).toBeInTheDocument();
  });

  it('should change according to the filter', () => {
    renderWithRouterAndRedux(<FavoriteRecipes />);

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

  it('should be able to unfavorite an item', () => {
    renderWithRouterAndRedux(<FavoriteRecipes />);

    const allUnfavBtns = screen.getAllByRole('img', {
      name: /desfavoritar/i,
    });

    act(() => {
      userEvent.click(allUnfavBtns[0]);
      userEvent.click(allUnfavBtns[1]);
    });
  });
});
