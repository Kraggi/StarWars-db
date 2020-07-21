import React from 'react';
import { Route } from 'react-router-dom';
import PersonDetails from '../person-details/personDetails';
import ItemList from '../item-list/itemList';
import './peoplePage.css';
import PlanetDetails from '../planet-details/planetDetails';
import StarshipDetails from '../starship-details/starshipDetails';
function PeoplePage(props) {
  return (
    <div className='people_page'>
      <div className='container'>
        <div className='row people_page_inner'>
          <div className='col-lg-6 col-md-12'>
            <ItemList
              getData={props.getData}
              onItemSelected={props.onItemSelected}
            />
          </div>
          <div className='col-lg-6 col-md-12'>
            <Route path='/persons'>
              <PersonDetails personId={props.personId} />
            </Route>
            <Route path='/planets'>
              <PlanetDetails planetId={props.planetId} />
            </Route>
            <Route path='/starships'>
              <StarshipDetails starshipId={props.starshipId} />
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeoplePage;
