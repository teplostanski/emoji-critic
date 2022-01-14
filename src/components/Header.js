import React from 'react';
import './Header.css';
import Logo from './Logo';
import NavBar from './NavBar';


function Header () {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  )
}

export default Header;