import React from 'react'
import './Navbar.css'
import {FaTimes} from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="container flex_space">
          <div className='meni-icon'>
            <FaTimes className='times'/>

          </div>
          <ul className='nav-menu active'>
            <li>
              <NavLink to = '/'>Home</NavLink>
              <NavLink to = '/About'>About</NavLink>
              <NavLink to = '/Gallery'>Gallery</NavLink>
              <NavLink to = '/Desnigation'>Desnigation</NavLink>
              <NavLink to = '/Blogs'>Blogs</NavLink>
              <NavLink to = '/Contact'>Contact</NavLink>
              
            </li>

          </ul>

        </div>

      </nav>
    </>
  )
}

export default Navbar