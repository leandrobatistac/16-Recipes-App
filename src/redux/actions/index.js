// Action Types

export const ADD_USER = 'ADD_USER';
export const ADD_TYPE = 'ADD_TYPE';

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
