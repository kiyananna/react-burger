export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';

export const getOrderRequest = () => ({
  type: GET_ORDER_REQUEST,
});

export const getOrderDetail = (element) => ({
  type: GET_ORDER_SUCCESS,
  element,
});
