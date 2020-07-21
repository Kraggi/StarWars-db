import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  const showBurger = e => {
    if (e.target) {
      const burger_list = document.querySelector('.burger_list');
      burger_list.classList.toggle('burger_show');
    }
  };

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
          <nav className='burger' onClick={showBurger}>
            <div className='burger_menu'>
              <ul className='burger_list'>
                <li className='burger_item'>
                  <NavLink to='/persons'>People</NavLink>
                </li>
                <li className='burger_item'>
                  <NavLink to='/planets'>Planets</NavLink>
                </li>
                <li className='burger_item'>
                  <NavLink to='/starships'>Starships</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
