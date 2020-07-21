import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/randomPlanet';
import ItemList from '../item-list/itemList';

class App extends React.Component {
  state = {
    selectedPerson: 11,
  };
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };
  render() {
    return (
      <>
        <Header />
        <RandomPlanet />
        <ItemList
          onItemSelected={this.onPersonSelected}
          personId={this.state.selectedPerson}
        />
      </>
    );
  }
}

export default App;
