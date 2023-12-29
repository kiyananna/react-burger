import { TItem } from "../../utils/types";

export const GET_INGREDIENT_DESCRIPTION = 'GET_INGREDIENT_DESCRIPTION';
export const CLEAR_INGREDIENT_DESCRIPTION = 'CLEAR_INGREDIENT_DESCRIPTION';

export interface IGetIngredientDetail {
  readonly type: typeof GET_INGREDIENT_DESCRIPTION,
  element: TItem
}

export interface ICleanIngredientDetail {
  readonly type: typeof CLEAR_INGREDIENT_DESCRIPTION,
}

export type TIngredientDetailActions = 
| IGetIngredientDetail
| ICleanIngredientDetail

export const getIngredientDescription = (element: TItem) => ({
  type: GET_INGREDIENT_DESCRIPTION,
  element,
});

export const clearIngredientDescription = () => ({
  type: CLEAR_INGREDIENT_DESCRIPTION,
});
