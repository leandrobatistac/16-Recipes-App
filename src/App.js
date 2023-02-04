import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Recipes from './pages/Recipes';
import Details from './pages/Details';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/drinks/:id/in-progress"
          component={ RecipeInProgress }
        />
        <Route
          path="/meals/:id/in-progress"
          component={ RecipeInProgress }
        />
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/meals" component={ Recipes } />
        <Route exact path="/drinks" component={ Recipes } />
        <Route
          exact
          path="/meals/:id-da-receita"
          render={
            (props) => (<Details { ...props } />)
          }
        />
      </Switch>
    </div>
  );
}
export default App;
