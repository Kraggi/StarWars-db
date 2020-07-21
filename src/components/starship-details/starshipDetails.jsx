import React from 'react';
import SwapiService from '../../services/swapi-servise';
import './starshipDetails.css';
import Spinner from '../spinner/spinner';
class StarshipDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    starship: null,
  };

  componentDidMount() {
    this.updateStarship();
  }
  componentDidUpdate(prevProps) {
    if (this.props.starshipId !== prevProps.starshipId) {
      this.updateStarship();
    }
  }
  updateStarship() {
    const { starshipId } = this.props;
    if (!starshipId) {
      return;
    }
    this.swapiService.getStarship(starshipId).then(starship => {
      this.setState({ starship });
    });
  }
  render() {
    if (!this.state.starship) {
      return <Spinner />;
    }
    const {
      id,
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    } = this.state.starship;

    return (
      <div className='starshipDetails'>
        <div className='starshipDetails_inner row'>
          <div className='col-md-6 col-sm-12'>
            <img
              className='starship_img'
              src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
              alt='starship'
            />
          </div>
          <div className='starship_info  col-md-6 col-sm-12'>
            <div className='starship_name'>
              <h2>{name}</h2>
            </div>
            <div className='starship_param'>
              <p className='starship_model lined'>Model: {model}</p>
              <p className='starship_manufacturer lined'>
                Manufacturer: {manufacturer}
              </p>
              <p className='starship_costInCredits lined'>
                Cost In Credits: {costInCredits}
              </p>
              <p className='starship_length lined'>Length: {length}</p>
              <p className='starship_crew lined'>Crew: {crew}</p>
              <p className='starship_passengers lined'>
                Passengers: {passengers}
              </p>
              <p className='starship_cargoCapacity lined'>
                Cargo Capacity: {cargoCapacity}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StarshipDetails;
