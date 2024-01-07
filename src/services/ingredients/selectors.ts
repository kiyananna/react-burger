import { RootState } from "../store";

export const getConstructorIngredients = (state: RootState) =>
  state.ingredients.constructorIngredients;
