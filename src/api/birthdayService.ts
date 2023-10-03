import axios from 'axios';
import { NewBirthday } from '../models/interfaces';
import Cookies from 'js-cookie';
const baseUrl = '/api/birthdays';

export const getBirthday = (id: number) => {
  return axios.get(`${baseUrl}/${id}`);
};

export const getAllBirthdays = () => {
  return axios.get(baseUrl);
};

export const createBirthday = (newBirthday: NewBirthday) => {
  return axios.post(baseUrl, newBirthday, {
    headers: { Authorization: `Bearer ${Cookies.get('_auth')}` },
  });
};

export const updateBirthday = (id: number, newBirthday: NewBirthday) => {
  return axios.put(`${baseUrl}/${id}`, newBirthday, {
    headers: { Authorization: `Bearer ${Cookies.get('_auth')}` },
  });
};

export const deleteBirthday = (id: number) => {
  return axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: `Bearer ${Cookies.get('_auth')}` },
  });
};

export const login = (username: string, password: string) => {
  return axios.post('/api/login', { username, password });
};
