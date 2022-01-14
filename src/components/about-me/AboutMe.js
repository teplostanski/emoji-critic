import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import './AboutMe.css';
import MyStory from './MyStory';
import Hobbies from './Hobbies';
import Contact from './Contact';

function AboutMe () {
  const { path, url } = useRouteMatch();

  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <Link to={`${url}/my-story`}>My Story</Link>
        </li>
        <li>
          <Link to={`${url}/hobbies`}>Hobbies</Link>
        </li>
        <li>
          <Link to={`${url}/contact`}>My Contact Info</Link>
        </li>
      </ul>
      <Route path={`${path}/my-story`}>
        <MyStory />
      </Route>
      <Route path={`${path}/hobbies`}>
        <Hobbies />
      </Route>
      <Route path={`${path}/contact`}>
        <Contact />
      </Route>
    </div>
  )
}

export default AboutMe;