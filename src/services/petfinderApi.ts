import axios from 'axios';

const PETFINDER_API_URL = 'https://api.petfinder.com/v2';
let accessToken = '';

// Initialize the API client
const petfinderApi = axios.create({
  baseURL: PETFINDER_API_URL,
});

// Function to get access token
const getAccessToken = async () => {
  try {
    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_PETFINDER_API_KEY,
      client_secret: import.meta.env.VITE_PETFINDER_API_SECRET,
    });
    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

// Add token to requests
petfinderApi.interceptors.request.use(async (config) => {
  if (!accessToken) {
    await getAccessToken();
  }
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

// API functions
export const getPets = async (params: {
  type?: string;
  location?: string;
  distance?: number;
  page?: number;
  limit?: number;
}) => {
  try {
    const response = await petfinderApi.get('/animals', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const getPetTypes = async () => {
  try {
    const response = await petfinderApi.get('/types');
    return response.data;
  } catch (error) {
    console.error('Error fetching pet types:', error);
    throw error;
  }
};

export const getPetDetails = async (id: string) => {
  try {
    const response = await petfinderApi.get(`/animals/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pet details:', error);
    throw error;
  }
}; 