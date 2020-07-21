import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header_inner'>
          <div className='Site-name'>
            <h1>Star DB</h1>
          </div>
          <nav className='menu'>
            <ul className='menu_list'>
              <li className='menu_item'>
                <NavLink to='/persons'>People</NavLink>
              </li>
              <li className='menu_item'>
                <NavLink to='/planets'>Planets</NavLink>
              </li>
              <li className='menu_item'>
                <NavLink to='/starships'>Starships</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
