import React from 'react';
import { Link } from 'react-router-dom'; 
import image from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <nav>
    <ul>
    <img class="Corner-Logo" src={image} alt="Logo" />
    <p class="Website-Title"> Alberta 2514640</p>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/work">Work</Link></li>
    </ul>
  </nav>
  );
};

export default Header;
