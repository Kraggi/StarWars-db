import React from 'react';
import './personDetails.css';
function PersonDetails() {
  return (
    <div className='personDetails'>
      <div className='personDetails_inner'>
        <img
          className='person_img'
          src='https://starwars-visualguide.com/assets/img/characters/2.jpg'
          alt='person'
        />
        <div className='person_info'>
          <div className='person_name'>
            <h2>Person Name</h2>
          </div>
          <div className='person_param'>
            <p className='person_birth-year lined'>Birth year: 19BBY</p>
            <p className='person_gender lined'>Gender: Male</p>
            <p className='person_height lined'>Height: 172</p>
            <p className='person_mass lined'>Mass: 77</p>
            <p className='person_hair-color lined'>Hair color: Blond</p>
            <p className='person_skin-color lined'>Skin color: Fair</p>
            <p className='person_eye-color lined'>Eye color: Blue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
