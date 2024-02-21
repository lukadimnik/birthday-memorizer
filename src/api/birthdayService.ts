import axios from 'axios';
import { NewBirthday } from '../models/interfaces';
import Cookies from 'js-cookie';
const apiUrl = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL: `${apiUrl}/api`,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('_auth');
  
  // If the token is present, set it on the Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getBirthday = (id: number) => {
  return api.get(`/birthdays/${id}`);
};

export const getAllBirthdays = () => {
  return api.get('/birthdays');
};

export const createBirthday = (newBirthday: NewBirthday) => {
  return api.post('/birthdays', newBirthday);
};

export const updateBirthday = (id: number, newBirthday: NewBirthday) => {
  return api.put(`/birthdays/${id}`, newBirthday);
};

export const deleteBirthday = (id: number) => {
  return api.delete(`/birthdays/${id}`);
};

export const login = (username: string, password: string) => {
  return api.post('/login', { username, password });
};