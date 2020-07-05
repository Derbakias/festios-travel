// eslint-disable-next-line
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/nav.css'

const Navbar = () => {
  const loc = useLocation().pathname.length;
  const img = <li className='fade-logo'><NavLink to="/" ><img src={logo} alt="logo" className='logo' /></NavLink></li>;

  return (
    <nav id='nav'>
      <ul>
        <li><NavLink to="/history" activeClassName='nav-active' >History</NavLink></li>
        <li><NavLink to="/destinations" activeClassName='nav-active' >Destinations</NavLink></li>
        {loc > 1 && img}
        <li><NavLink to="/accomondation" activeClassName='nav-active' >Accomondation</NavLink></li>
        <li><NavLink to="/festivals" activeClassName='nav-active' >Festivals</NavLink></li>
      </ul>
      <form className='search-wrapper'>
        <button type="submit" id='btn'><i className='fas fa-search'></i></button>
        <input type="text" name="search" id="search"/>
      </form>
    </nav>
  )
}

export default Navbar
