import React from 'react';
import './AboutUs.css';
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';
import { Route, Link, useRouteMatch } from 'react-router-dom';

function AboutUs () {
  const { path, url } = useRouteMatch();
  
  return (
    <div className="about-us">
      <ul>
        <li>
          <Link to={`${url}/site-history`}>История приложения</Link>
        </li>
        <li>
          <Link to={`${url}/site-mission`}>Наша миссия</Link>
        </li>
      </ul>
      <Route path={`${path}/site-history`}>
        <SiteHistory />
      </Route>
      <Route path={`${path}/site-mission`}>
        <SiteMission />
      </Route>
    </div>
  )
}

export default AboutUs;