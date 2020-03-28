import axios from 'axios';
import { API_URL } from '../env';
import { getData } from './LocalStorage';

const client = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  responseType: 'json',
  timeout: 10000,
});

client.interceptors.request.use(
  async (config) => {
    const token = (await getData('token')) || '';
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default client;
