import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from './actions';

const defaultState = {
  ingredients: [],
  constructorIngredients: [],
};

export const ingredientsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, ingredients: action.payload };
    }

    default:
      return state;
  }
};
