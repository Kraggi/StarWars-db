import React from 'react';
import './error.css';
import icon from './death-star.png';
function Error() {
  return (
    <div className='error'>
      <img src={icon} alt='death star' />
      <h1>BOOM!</h1>
      <p>something has gone terribly wrong</p>
      <p>(but we already send droids to fix it)</p>
    </div>
  );
}

export default Error;
