import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

function Logo () {
  return (
		<Link to="/"><p className="logo">
		<span role="img" aria-label="Emoji critic logo">🤔</span> Emoji Critic
		
	</p></Link>
	
		)
}

export default Logo