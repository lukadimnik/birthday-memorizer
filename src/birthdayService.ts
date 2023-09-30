import axios from 'axios';
import { NewBirthday } from './models/interfaces';
const baseUrl = 'http://localhost:3001/api/birthdays';

export const getBirthday = (id: number) => {
  return axios.get(`${baseUrl}/${id}`);
};

export const getAllBirthdays = () => {
  return axios.get(baseUrl);
};

export const createBirthday = (newBirthday: NewBirthday) => {
  return axios.post(baseUrl, newBirthday);
};

export const updateBirthday = (id: number, newBirthday: NewBirthday) => {
  return axios.put(`${baseUrl}/${id}`, newBirthday);
};

export const deleteBirthday = (id: number) => {
  return axios.delete(`${baseUrl}/${id}`);
};
