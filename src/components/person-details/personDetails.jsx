import React from 'react';
import SwapiService from '../../services/swapi-servise';
import './personDetails.css';
import Spinner from '../spinner/spinner';

class PersonDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    person: null,
  };

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }
  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then(person => {
      this.setState({ person });
    });
  }

  render() {
    if (!this.state.person) {
      return <Spinner />;
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    console.log(this.state);
    return (
      <div className='personDetails'>
        <div className='personDetails_inner row'>
          <div className='col-md-6 col-sm-12'>
            <img
              className='person_img'
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt='person'
            />
          </div>
          <div className='person_info  col-md-6 col-sm-12'>
            <div className='person_name'>
              <h2>{name}</h2>
            </div>
            <div className='person_param'>
              <p className='person_birth-year lined'>Birth year: {birthYear}</p>
              <p className='person_gender lined'>Gender: {gender}</p>
              <p className='person_eye-color lined'>Eye color: {eyeColor}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
