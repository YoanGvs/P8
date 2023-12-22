import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'; 

function Header() {
  return (
    <div className="Header">
        <img src={logo} alt="Logo" className='logo'/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">About</Link>
        </nav>
    </div>
  );
}

export default Header;
