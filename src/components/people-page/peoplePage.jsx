import React from 'react';
import PersonDetails from '../person-details/personDetails';
import ItemList from '../item-list/itemList';
import './peoplePage.css';
function PeoplePage(props) {
  return (
    <div className='people_page'>
      <div className='container'>
        <div className='people_page_inner'>
          <ItemList onItemSelected={props.onItemSelected} />
          <PersonDetails personId={props.personId} />
        </div>
      </div>
    </div>
  );
}

export default PeoplePage;
