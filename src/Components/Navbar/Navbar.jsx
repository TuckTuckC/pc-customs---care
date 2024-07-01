import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

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
        <Link to="/">Home</Link>
        <div></div>
        <Link to="/">Our Builds</Link>
        <div></div>
        <Link to="/">Custom Options</Link>
        <div></div>
        <Link to="/contact">Contact Us</Link>
    </div>
  )
}

export default Navbar