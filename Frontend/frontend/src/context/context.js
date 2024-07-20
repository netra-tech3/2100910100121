import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const getProducts = async (params) => {
  const response = await axios.get(`${API_BASE_URL}/categories/${params.category}/products`, {
    params
  });
  return response.data;
};

export const getProductById = async (category, productId) => {
  const response = await axios.get(`${API_BASE_URL}/categories/${category}/products/${productId}`);
  return response.data;
};