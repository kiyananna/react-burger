import { API_URL } from 'constants/constants';
import { checkResponse } from '../../utils/utils';

export const fetchIngredients = async () => {
  try {
    const response = await fetch(`${API_URL}ingredients`);
    checkResponse(response);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('An error occurred:', error);
    throw error;
  }
};
