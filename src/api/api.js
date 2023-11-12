import { API_URL } from 'constants/constants';

export const fetchIngredients = async () => {
  try {
    const response = await fetch(`${API_URL}ingredients`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('An error occurred:', error);
    throw error;
  }
};
