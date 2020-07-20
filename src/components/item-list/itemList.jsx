import React from 'react';
import './itemList.css';
import PersonDetails from '../person-details/personDetails';
import PlanetDetails from '../planet-details/planetDetails';
function ItemList() {
  return (
    <div className='list'>
      <div className='container'>
        <div className='list_inner'>
          <ul className='list-group'>
            <a href='#' className='list-group-item list-group-item-action'>
              Cras justo odio
            </a>
            <a href='#' className='list-group-item list-group-item-action'>
              Dapibus ac facilisis in
            </a>
            <a href='#' className='list-group-item list-group-item-action'>
              Morbi leo risus
            </a>
            <a href='#' className='list-group-item list-group-item-action'>
              Porta ac consectetur ac
            </a>
          </ul>
          <PlanetDetails />
        </div>
      </div>
    </div>
  );
}

export default ItemList;
