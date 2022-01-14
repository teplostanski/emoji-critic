import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Review from './Review';
import Reviews from './Reviews';
import AboutMe from './about-me/AboutMe';
import AboutUs from './about-us/AboutUs';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [reviews, setReviews] = useState();
  // этот хук используется единожды, при запуске компонента
  useEffect(() => {
    // получаем данные с сервера
    fetch('https://api.nomoreparties.co/emoji-critic-rus').then((res) => {
      return res.json();
    }).then((parsedReviews) => {
      // форматируем данные и, используя setData, обновляем текущий стейт
      const reviews = Object.values(parsedReviews);
      setReviews(reviews);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews}/>
        </Route>
        <Route exact path="/reviews/:id">
          <Review reviews={reviews}/>
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
