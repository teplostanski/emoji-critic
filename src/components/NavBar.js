import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink exact to="/" activeClassName="menu__link_active" className="menu__link">Home</NavLink>
      <NavLink to="/reviews" activeClassName="menu__link_active" className="menu__link">Emoji Reviews</NavLink>
      <NavLink to="/about-me" activeClassName="menu__link_active" className="menu__link">About Me</NavLink>
      <NavLink to="/about-us" activeClassName="menu__link_active" className="menu__link">About Us</NavLink>
    </nav>
  )
}

export default NavBar;