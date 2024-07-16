import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../../images/pcLogo.png';

import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector('.Navbar');
      if (navbar) {
        if (window.innerWidth <= 899) {
          navbar.style.top = 'auto';
          navbar.style.bottom = '0';
        } else {
          navbar.style.top = '0';
          navbar.style.bottom = 'auto';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Adjust on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='Navbar'>
        <Link to="/"><img src={Logo} className='logo' /></Link>
        <div></div>
        <Link to="/builds">Our Builds</Link>
        <div></div>
        <Link to="/options">Custom Options</Link>
        <div></div>
        <Link to="/contact">Contact Us</Link>
    </div>
  )
}

export default Navbar