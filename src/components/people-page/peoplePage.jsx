import React from 'react';
import PersonDetails from '../person-details/personDetails';
import ItemList from '../item-list/itemList';
import './peoplePage.css';
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
            <PersonDetails personId={props.personId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeoplePage;
