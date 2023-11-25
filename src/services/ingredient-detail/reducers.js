import {
  GET_INGREDIENT_DESCRIPTION,
  CLEAR_INGREDIENT_DESCRIPTION,
} from './actions';

const initialState = {
  ingredientDetail: {},
};

export const ingredientDetailReducer = (state = initialState, action) => {
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
        ingredientDetail: {},
      };
    }
    default: {
      return state;
    }
  }
};
