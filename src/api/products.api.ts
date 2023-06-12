import axios from 'axios';

const API_PATH = process.env.REACT_APP_API_PATH || 'http://localhost:3001';

export const fetchAllProducts = async () => {
  const result = await axios.get(`${API_PATH}/products`);

  return result.data;
};
