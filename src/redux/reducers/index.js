import { combineReducers } from 'redux';
import user from './user';
import typeRecipe from './typeRecipe';

const rootReducer = combineReducers({ user, typeRecipe });

export default rootReducer;
