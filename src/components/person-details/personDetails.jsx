import React from 'react';
import './personDetails.css';
import SwapiService from '../../services/swapi-servise';

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
      return <span>Select person from list</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div className='personDetails'>
        <div className='personDetails_inner'>
          <img
            className='person_img'
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt='person'
          />
          <div className='person_info'>
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
