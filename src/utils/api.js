import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchAllProducts = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchPaginatedProducts = async (page, limit = 10) => {
  try {
    const { data } = await axios.get(API_URL);
    const startIndex = (page - 1) * limit;
    return data.slice(startIndex, startIndex + limit);
  } catch (error) {
    console.error('Error fetching paginated products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
