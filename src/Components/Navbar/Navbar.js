import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
        <Link to="/">Home</Link>
        <div></div>
        <Link to="/">Our Builds</Link>
        <div></div>
        <Link to="/">Custom Options</Link>
        <div></div>
        <Link to="/">Contact Us</Link>
    </div>
  )
}

export default Navbar