import { loadPost, postOrder } from '../../utils/utils';
import { API_URL } from '../../constants/constants';
// import { getOrderDetail, getOrderFailed } from '../order-detail/actions';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  loadPost(`${API_URL}ingredients`)
    .then((data) => {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data.data });
    })
    .catch((err) => {
      dispatch({ type: GET_INGREDIENTS_FAILED, payload: err.message });
    });
};

// export const orderPosted = (body) => {
//   return async (dispatch) => {
//     try {
//       const data = await postOrder(`${API_URL}orders`, { ingredients: body });
//       dispatch(getOrderDetail(data.order.number));
//     } catch (err) {
//       dispatch(getOrderFailed(err.message));
//     }
//   };
// };
