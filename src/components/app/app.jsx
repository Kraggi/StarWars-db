import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header';
import RandomPlanet from '../random-planet/randomPlanet';
import PeoplePage from '../people-page/peoplePage';
import SwapiService from '../../services/swapi-servise';

class App extends React.Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 11,
    selectedPlanet: 2,
    selectedStarship: 5,
  };
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };
  onPlanetSelected = id => {
    this.setState({ selectedPlanet: id });
  };
  onStarshipSelected = id => {
    this.setState({ selectedStarship: id });
  };
  render() {
    return (
      <BrowserRouter>
        <Header />
        <RandomPlanet />
        <Route path='/persons'>
          <PeoplePage
            onItemSelected={this.onPersonSelected}
            personId={this.state.selectedPerson}
            getData={this.swapiService.getAllPeople}
          />
        </Route>
        <Route path='/planets'>
          <PeoplePage
            onItemSelected={this.onPlanetSelected}
            planetId={this.state.selectedPlanet}
            getData={this.swapiService.getAllPlanets}
          />
        </Route>
        <Route path='/starships'>
          <PeoplePage
            onItemSelected={this.onStarshipSelected}
            starshipId={this.state.selectedStarship}
            getData={this.swapiService.getAllStarships}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
