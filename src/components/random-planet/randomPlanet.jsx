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
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 18) + 2;
    console.log(id);
    this.swapiService.getPlanet(id).then(planet => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      });
    });
  }

  render() {
    return (
      <div className='randomPlanet'>
        <div className='container'>
          <div className='randomPlanet_inner'>
            <img
              className='planet_img'
              src={`https://starwars-visualguide.com/assets/img/planets/${this.state.id}.jpg`}
              alt='planet'
            />
            <div className='planet_info'>
              <div className='planet_name'>
                <h2>{this.state.name}</h2>
              </div>
              <div className='planet_param'>
                <p className='planet_population lined'>
                  Population: {this.state.population}
                </p>
                <p className='planet_rotation lined'>
                  Rotation period: {this.state.rotationPeriod}
                </p>
                <p className='planet_diameter lined'>
                  Diameter: {this.state.diameter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
