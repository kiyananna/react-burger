const URL = 'https://norma.nomoreparties.space/api/ingredients';

export const fetchIngredients = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('An error occurred:', error);
    throw error;
  }
};
