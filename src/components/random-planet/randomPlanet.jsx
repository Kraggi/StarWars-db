import React from 'react';
import './randomPlanet.css';
import SwapiService from '../../services/swapi-servise';

class RandomPlanet extends React.Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  onPlanetLoaded = planet => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 18) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter },
    } = this.state;
    return (
      <div className='randomPlanet'>
        <div className='container'>
          <div className='randomPlanet_inner'>
            <img
              className='planet_img'
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt='planet'
            />
            <div className='planet_info'>
              <div className='planet_name'>
                <h2>{name}</h2>
              </div>
              <div className='planet_param'>
                <p className='planet_population lined'>
                  Population: {population}
                </p>
                <p className='planet_rotation lined'>
                  Rotation period: {rotationPeriod}
                </p>
                <p className='planet_diameter lined'>Diameter: {diameter}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
