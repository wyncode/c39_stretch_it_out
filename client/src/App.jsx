import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnonHomePage from './pages/AnonHomePage';
import StretchCategory from './pages/StretchCategory';
import IndividualStretch from './pages/IndividualStretch';
import PrivateRoute from './components/PrivateRoute';
import UserHomePage from './pages/UserHomePage';
import Quiz from './pages/Quiz';
import Benefits from './pages/Benefits';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/benefits" component={Benefits} />
          <Route exact path="/" component={AnonHomePage} />
          <Route exact path="/body-area" component={StretchCategory} />
          <Route exact path="/stretch/:id" component={IndividualStretch} />
          <Route eact path="/sign-up" component={Quiz} />
          <PrivateRoute exact path="/profile" component={UserHomePage} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
