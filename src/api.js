// src/api.js
import axios from 'axios';

const baseURL = 'YOUR_BACKEND_API_BASE_URL';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};