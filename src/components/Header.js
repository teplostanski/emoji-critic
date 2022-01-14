import React from 'react';
import './Header.css';
import Logo from './Logo';
import NavBar from './NavBar';
import GoBack from './GoBack';


function Header () {
  return (
    <div className="header">
      <Logo />
			<GoBack />
      <NavBar />
    </div>
  )
}

export default Header;