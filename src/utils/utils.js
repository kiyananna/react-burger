import { API_URL } from '../constants/constants';
import {
  getOrderDetail,
  getOrderFailed,
} from '../services/order-detail/actions';

export const loadPost = async (url) => {
  const response = await fetch(url);
  return checkResponse(response);
};

export const postOrder = (body) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients: body,
        }),
      });
      const data = await response.json();
      dispatch(getOrderDetail(data.order.number));
    } catch (err) {
      dispatch(getOrderFailed(err.message));
    }
  };
};

export const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  return response.json();
};
