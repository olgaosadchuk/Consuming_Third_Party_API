import axios from 'axios';


export async function getAllStarships() {
    try {
      const response = await axios.get('https://swapi.dev/api/starships');
      return response.data.results;
    } catch (error) {
      console.error('Error fetching starships:', error);
      return [];
    }
  }

  