import React from 'react';
import './itemList.css';
import PersonDetails from '../person-details/personDetails';
import SwapiService from '../../services/swapi-servise';
import Spinner from '../spinner/spinner';

class ItemList extends React.Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({ peopleList });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className='list-group-item list-group-item-action'
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);
    return (
      <div className='list'>
        <div className='container'>
          <div className='list_inner'>
            <ul className='list-group'>{items}</ul>
            <PersonDetails personId={this.props.personId} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
