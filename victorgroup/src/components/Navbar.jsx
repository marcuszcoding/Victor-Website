import React from 'react';
import '../styles/Navbar.scss';
import logo from '../assets/VGHighResolutionLogo.jpg'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <img src={logo} alt='Company Logo' className='navbar-logo' />
        <li className="navItem"><a href="#Home" className="navLink">Home</a></li>
        <li className="navItem"><a href="#About" className="navLink">About</a></li>
        <li className="navItem"><a href="#Services" className="navLink">Services</a></li>
        <li className="navItem"><a href="#Contact" className="navLink">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;