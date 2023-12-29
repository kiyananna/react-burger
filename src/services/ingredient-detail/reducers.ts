import {
  GET_INGREDIENT_DESCRIPTION,
  CLEAR_INGREDIENT_DESCRIPTION,
  TIngredientDetailActions
} from './actions';
import { TItem } from "../../utils/types";

type TIngredientState = {
  ingredientDetail: TItem | null
}

const initialState = {
  ingredientDetail: null,
};

export const ingredientDetailReducer = (state: TIngredientState = initialState, action:   TIngredientDetailActions): TIngredientState => {
  switch (action.type) {
    case GET_INGREDIENT_DESCRIPTION: {
      return {
        ...state,
        ingredientDetail: { ...action.element },
      };
    }
    case CLEAR_INGREDIENT_DESCRIPTION: {
      return {
        ...state,
        ingredientDetail: null,
      };
    }
    default: {
      return state;
    }
  }
};
