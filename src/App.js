import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Main } />
        <Route exact path="/drinks" component={ Main } />
      </Switch>
    </div>
  );
}

export default App;
