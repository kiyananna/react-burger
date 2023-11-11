import { loadPost } from '../../utils/utils';

const URL = 'https://norma.nomoreparties.space/api/ingredients';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  loadPost(URL).then((data) => {
    dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data.data });
  });
};
