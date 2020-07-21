import React from 'react';
import './randomPlanet.css';
import SwapiService from '../../services/swapi-servise';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

class RandomPlanet extends React.Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  onError = err => {
    this.setState({ error: true, loading: false });
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };
  updatePlanet() {
    const id = Math.floor(Math.random() * 18) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className='randomPlanet'>
        <div className='container'>
          <div className='randomPlanet_inner'>
            {errorMessage}
            {spinner}
            {content}
          </div>
        </div>
      </div>
    );
  }
}
const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
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
          <p className='planet_population lined'>Population: {population}</p>
          <p className='planet_rotation lined'>
            Rotation period: {rotationPeriod}
          </p>
          <p className='planet_diameter lined'>Diameter: {diameter}</p>
        </div>
      </div>
    </>
  );
};
export default RandomPlanet;
