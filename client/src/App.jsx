import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnonHomePage from './pages/AnonHomePage';
import StretchCategory from './pages/StretchCategory';
import IndividualStretch from './pages/IndividualStretch';
import PrivateRoute from './components/PrivateRoute';
import UserHomePage from './pages/UserHomePage';
import Benefits from './pages/Benefits';
import Quiz from './pages/Quiz/Quiz';
import Welcome from './pages/Quiz/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import StretchModal from './components/StretchModal';

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
          <Route exact path="/sign-up" component={Quiz} />
          <Route exact path="/modal" component={StretchModal} />
          <Route exact path="/sign-up" component={Welcome} />
          <PrivateRoute exact path="/profile" component={UserHomePage} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
