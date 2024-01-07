import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, IGetIngredientsRequest, IGetIngredientsSuccess} from './actions';
import { TItem } from '../../utils/types';

type TIngredientsState = {
  ingredients: TItem[],
  constructorIngredients: TItem[]
}

const defaultState: TIngredientsState = {
  ingredients: [],
  constructorIngredients: [],
};

export const ingredientsReducer = (state: TIngredientsState = defaultState, action: IGetIngredientsRequest | IGetIngredientsSuccess): TIngredientsState => {
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
