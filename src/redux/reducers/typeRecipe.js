import { ADD_TYPE } from '../actions';

const INITIAL_STATE = {
  typeRecipe: '',
};

const typeRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TYPE:
    return {
      ...state,
      typeRecipe: action.payload.typeRecipe,
    };
  default: return state;
  }
};

export default typeRecipe;
