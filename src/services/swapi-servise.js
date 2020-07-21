class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getDB(url) {
    try {
      const res = await fetch(this._apiBase + url);
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error('Oops', error);
    }
  }

  getAllPeople = async () => {
    const res = await this.getDB(`/people/`);
    return res.results.map(this._transformPerson);
  };
  getPerson = async id => {
    const person = await this.getDB(`/people/${id}/`);
    return this._transformPerson(person);
  };
  getAllPlanets = async () => {
    const res = await this.getDB(`/planets/`);
    return res.results.map(this._transformPlanet);
  };
  getPlanet = async id => {
    const planet = await this.getDB(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };
  getAllStarships = async () => {
    const res = await this.getDB(`/starships/`);
    return res.results.map(this._transformStarships);
  };
  getStarship = async id => {
    const starship = await this.getDB(`/starships/${id}/`);
    return this._transformStarships(starship);
  };

  _extractId(item) {
    const idReg = /\/([0-9]*)\/$/;
    return item.url.match(idReg)[1];
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };
  _transformStarships = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };
  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}

export default SwapiService;
