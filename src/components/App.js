import React from 'react';
import { Route, Switch } from 'react-router-dom'; // импортируем Switch
import Dashboard from './Dashboard';
import Header from './Header';
import Reviews from './Reviews';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;