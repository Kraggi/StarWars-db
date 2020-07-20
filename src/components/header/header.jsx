import React from 'react';
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
                <a href='#'>People</a>
              </li>
              <li className='menu_item'>
                <a href='#'>Planets</a>
              </li>
              <li className='menu_item'>
                <a href='#'>Starships</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
