import axios from 'axios';
import { User } from '../types/user';

const API_PATH = process.env.REACT_APP_API_PATH || 'http://localhost:3001';

export const signUp = async (
  email: string,
  password: string,
): Promise<User> => {
  const requestURL = `${API_PATH}/auth/sign-up`;

  const result = await axios.post(requestURL, { email, password });

  return result.data;
};

export const logIn = async (
  email: string,
  password: string,
): Promise<User> => {
  const requestURL = `${API_PATH}/auth/log-in`;

  const result = await axios.post(requestURL, { email, password });

  return result.data;
};

export const resetPassword = async (
  email: string,
): Promise<User> => {
  const requestURL = `${API_PATH}/auth/reset-password`;

  const result = await axios.patch(requestURL, { email });

  return result.data;
};
