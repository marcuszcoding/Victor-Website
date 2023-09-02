import React from 'react';
import '../styles/Navbar.scss';
import logo from '../assets/VGHighResolutionLogo.jpg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-image">
        <img src={logo} alt='Company Logo' className='navbar-logo' />
      </div>
      <div className="navbar-menu">
        <ul className="navList">
          <li className="navItem"><a href="#Home" className="navLink">Home</a></li>
          <li className="navItem"><a href="#About" className="navLink">About</a></li>
          <li className="navItem"><a href="#Services" className="navLink">Services</a></li>
          <li className="navItem"><a href="#Contact" className="navLink">Contact</a></li>
        </ul>
      </div>
      <div className="start-here">
        <button className='cta-button'>Start Here</button>
      </div>
    </nav>
  );
}

export default Navbar;