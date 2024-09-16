import axios, { AxiosInstance } from 'axios';
const url = 'https://swapi.dev/api/people';

// Create an Axios instance
export const autoFetch: AxiosInstance = axios.create({
  baseURL: url,
});
