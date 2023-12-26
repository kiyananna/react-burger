export const GET_INGREDIENT_DESCRIPTION = 'GET_INGREDIENT_DESCRIPTION';
export const CLEAR_INGREDIENT_DESCRIPTION = 'CLEAR_INGREDIENT_DESCRIPTION';

export const getIngredientDescription = (element: any) => ({
  type: GET_INGREDIENT_DESCRIPTION,
  element,
});

export const clearIngredientDescription = () => ({
  type: CLEAR_INGREDIENT_DESCRIPTION,
});
