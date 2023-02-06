// Action Types

export const ADD_USER = 'ADD_USER';
export const ADD_TYPE = 'ADD_TYPE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action Creator

export const addUser = (email, password) => ({
  type: ADD_USER,
  payload: {
    email,
    password,
  },
});

export const addType = (typeRecipe) => ({
  type: ADD_TYPE,
  payload: {
    typeRecipe,
  },
});

export const addToFavorites = (id, name) => ({
  type: ADD_TO_FAVORITES,
  payload: { id, name },
});

export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});
