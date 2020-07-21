import React from 'react';
import './planetDetails.css';
import SwapiService from '../../services/swapi-servise';
import Spinner from '../spinner/spinner';
class PlanetDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: null,
  };

  componentDidMount() {
    this.updatePlanets();
  }
  componentDidUpdate(prevProps) {
    if (this.props.planetId !== prevProps.planetId) {
      this.updatePlanets();
    }
  }
  updatePlanets() {
    const { planetId } = this.props;
    if (!planetId) {
      return;
    }
    this.swapiService.getPlanet(planetId).then(planet => {
      this.setState({ planet });
    });
  }
  render() {
    if (!this.state.planet) {
      return <Spinner />;
    }
    const {
      id,
      name,
      population,
      rotationPeriod,
      diameter,
    } = this.state.planet;
    return (
      <div className='planetDetails'>
        <div className='planetDetails_inner row'>
          <div className='col-md-6 col-sm-12'>
            <img
              className='planet_img'
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt='planet'
            />
          </div>
          <div className='planet_info  col-md-6 col-sm-12'>
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
    );
  }
}

export default PlanetDetails;
