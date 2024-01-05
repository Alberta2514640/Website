import React from 'react';
import { Link } from 'react-router-dom'; 
import image from '../../assets/logo.png';
import './Header.css';
import { toast } from 'react-toastify';

const Header = () => {

  function img_click(){
    toast("You clicked the logo!",
    { autoClose: 1000,
    pauseOnHover: true });
  }

  return (
    

<nav>
    <ul>
    <img class="Corner-Logo" src={image} alt="Logo" onClick={img_click}/>
    
    <p class="Website-Title"> Alberta 2514640</p>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/work">Work</Link></li>
    </ul>
  </nav>
  


  );
};

export default Header;
