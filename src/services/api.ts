import axios from 'axios';

const DOG_API_URL = 'https://dog.ceo/api';

export interface Dog {
  id: string;
  url: string;
  breed: string;
  subBreed?: string;
  description?: string;
}

export interface DogBreed {
  name: string;
  subBreeds: string[];
}

const api = axios.create({
  baseURL: DOG_API_URL
});

export const petApi = {
  // Get all dog breeds
  getBreeds: async (): Promise<DogBreed[]> => {
    try {
      const response = await api.get('/breeds/list/all');
      const breeds: DogBreed[] = [];
      
      Object.entries(response.data.message).forEach(([breed, subBreeds]) => {
        breeds.push({
          name: breed,
          subBreeds: subBreeds as string[]
        });
      });
      
      return breeds;
    } catch (error) {
      console.error('Error fetching breeds:', error);
      throw new Error('Failed to fetch breeds');
    }
  },

  // Get random dog images
  getRandomDogs: async (count: number = 10): Promise<Dog[]> => {
    try {
      const response = await api.get(`/breeds/image/random/${count}`);
      return response.data.message.map((url: string) => {
        const parts = url.split('/');
        const breedInfo = parts[parts.length - 2].split('-');
        return {
          id: url,
          url,
          breed: breedInfo[0],
          subBreed: breedInfo[1]
        };
      });
    } catch (error) {
      console.error('Error fetching random dogs:', error);
      throw new Error('Failed to fetch random dogs');
    }
  },

  // Get dogs by breed
  getDogsByBreed: async (breed: string, subBreed?: string): Promise<Dog[]> => {
    try {
      const path = subBreed 
        ? `/breed/${breed}/${subBreed}/images`
        : `/breed/${breed}/images`;
      
      const response = await api.get(path);
      return response.data.message.map((url: string) => ({
        id: url,
        url,
        breed,
        subBreed
      }));
    } catch (error) {
      console.error('Error fetching dogs by breed:', error);
      throw new Error('Failed to fetch dogs by breed');
    }
  }
};

export default petApi; 