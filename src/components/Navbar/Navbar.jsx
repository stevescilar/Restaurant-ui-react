import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutLineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const  Navbar = () => (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#About">About</a></li>
      <li className='p__opensans'><a href="#Menu">Menu</a></li>
      <li className='p__opensans'><a href="#Awards">Awards</a></li>
      <li className='p__opensans'><a href="#Contact">Contacts</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'> Log In / Register </a>
      <div />
      <a href="/" className="p__opensans">Book A Table</a>
    </div>
  </nav>
);

export default Navbar;
