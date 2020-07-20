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

  async getAllPeople() {
    const res = await this.getDB(`/people/`);
    return res.results;
  }
  getPerson(id) {
    return this.getDB(`/people/${id}/`);
  }
  getAllPlanets() {
    return this.getDB(`/planets/`);
  }
  getPlanet(id) {
    return this.getDB(`/planets/${id}/`);
  }
  getAllStarships() {
    return this.getDB(`/starships/`);
  }
  getStarship(id) {
    return this.getDB(`/starships/${id}/`);
  }
}

export default SwapiService;
