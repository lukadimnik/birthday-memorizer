import axios from 'axios';
const baseUrl = '/api/birthdays';

export const getBirthday = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

export const getAllBirthdays = () => {
  return axios.get(baseUrl);
};

export const createBirthday = (newBirthday) => {
  return axios.post(baseUrl, newBirthday);
};

export const updateBirthday = (id, newBirthday) => {
  return axios.put(`${baseUrl}/${id}`, newBirthday);
};

export const deleteBirthday = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
