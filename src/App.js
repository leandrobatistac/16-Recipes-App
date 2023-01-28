import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
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
