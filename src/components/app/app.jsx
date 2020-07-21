import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/randomPlanet';
import PeoplePage from '../people-page/peoplePage';
import SwapiService from '../../services/swapi-servise';

class App extends React.Component {
  swapiService = new SwapiService();
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
        <PeoplePage
          onItemSelected={this.onPersonSelected}
          personId={this.state.selectedPerson}
          getData={this.swapiService.getAllPeople}
        />
        {/* <PeoplePage
          onItemSelected={this.onPersonSelected}
          personId={this.state.selectedPerson}
          getData={this.swapiService.getAllPlanets}
        /> */}
      </>
    );
  }
}

export default App;
