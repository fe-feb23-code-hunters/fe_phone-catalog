import axios from 'axios';
import { Order } from '../types/order';

const API_PATH = process.env.REACT_APP_API_PATH || 'http://localhost:3001';

export const fetchUserOrders = async (userId: number): Promise<Order[]> => {
  const requestURL = `${API_PATH}/orders/${userId}`;

  const result = await axios.get(requestURL);

  return result.data;
};

export const createOrder = async (
  userId: number,
  productIds: string[],
): Promise<Order> => {
  const requestURL = `${API_PATH}/orders/`;

  const result = await axios.post(requestURL, { userId, productIds });

  return result.data;
};
