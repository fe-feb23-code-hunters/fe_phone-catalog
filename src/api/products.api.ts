import axios from 'axios';
import { Product } from '../types/product';

const API_PATH = process.env.REACT_APP_API_PATH || 'http://localhost:3001';

export const fetchAllProducts = async (): Promise<{ products: Product[] }> => {
  const result = await axios.get(`${API_PATH}/products/`);

  return result.data;
};

export const fetchRecommendedProducts = async (
  productId: string,
): Promise<{ products: Product[] }> => {
  const result = await axios.get(
    `${API_PATH}/products/${productId}/recommended`,
  );

  return result.data;
};

export const fetchNewProducts = async (): Promise<{ products: Product[] }> => {
  const result = await axios.get(
    `${API_PATH}/products/new`,
  );

  return result.data;
};

export const fetchProductById = async (productId: string): Promise<Product> => {
  const result = await axios.get(`${API_PATH}/products/${productId}`);

  return result.data;
};
