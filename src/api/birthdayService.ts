import axios from 'axios';
import { NewBirthday } from '../models/interfaces';
import Cookies from 'js-cookie';

const baseUrl = '/api/birthdays';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${Cookies.get('_auth')}`,
  },
});

export const getBirthday = (id: number) => {
  return api.get(`/${id}`);
};

export const getAllBirthdays = () => {
  return api.get('/');
};

export const createBirthday = (newBirthday: NewBirthday) => {
  return api.post('/', newBirthday);
};

export const updateBirthday = (id: number, newBirthday: NewBirthday) => {
  return api.put(`/${id}`, newBirthday);
};

export const deleteBirthday = (id: number) => {
  return api.delete(`/${id}`);
};

export const login = (username: string, password: string) => {
  return axios.post('/api/login', { username, password });
};
