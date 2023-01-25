// Action Types

export const ADD_USER = 'ADD_USER';

// Action Creator

export const addUser = (email, password) => ({
  type: ADD_USER,
  payload: {
    email,
    password,
  },
});
