import { postOrder } from '../../utils/utils';
import { API_URL } from '../../constants/constants';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const getOrderRequest = () => ({
  type: GET_ORDER_REQUEST,
});

// export const getOrderDetail = (element) => ({
//   type: GET_ORDER_SUCCESS,
//   element,
// });

// export const getOrderFailed = (element) => ({
//   type: GET_ORDER_FAILED,
//   element,
// });

export const sendOrder = (items: any) => (dispatch: any) => {
  dispatch({
    type: GET_ORDER_REQUEST,
  });
  postOrder(`${API_URL}orders`, items)
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_ORDER_SUCCESS,
        element: res.order.number,
      });
    })
    .catch((err) => {
      console.log('XNJJJ');
      dispatch({
        type: GET_ORDER_FAILED,
      });
    });
};
