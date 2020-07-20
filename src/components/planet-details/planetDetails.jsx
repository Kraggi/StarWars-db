import React from 'react';
import './planetDetails.css';
function PlanetDetails() {
  return (
    <div className='planetDetails'>
      <div className='planetDetails_inner'>
        <img
          className='planet_img'
          src='https://starwars-visualguide.com/assets/img/planets/2.jpg'
          alt='planet'
        />
        <div className='planet_info'>
          <div className='planet_name'>
            <h2>Planet Name</h2>
          </div>
          <div className='planet_param'>
            <p className='planet_population lined'>Population 1232131</p>
            <p className='planet_rotation lined'>Rotation period 32</p>
            <p className='planet_diameter lined'>Diameter 100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;
