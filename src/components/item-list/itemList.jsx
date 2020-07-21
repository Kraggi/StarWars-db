import React from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

class ItemList extends React.Component {
  state = {
    peopleList: null,
  };
  componentDidMount() {
    const { getData } = this.props;

    getData().then(peopleList => {
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
        <div className='list_inner'>
          <ul className='list-group'>{items}</ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
