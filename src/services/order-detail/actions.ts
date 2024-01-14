import { postOrder } from '../../utils/utils';
import { TItem, TOptions } from "../../utils/types";
import { API_URL } from '../../constants/constants';
import { AppDispatch, AppThunk } from "../store";
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

export const sendOrder: AppThunk = (items: string[], token: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST,
  });
  postOrder(`${API_URL}orders`, items, token)
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

export type TOrderResponse = {
  orderID?: string,
}

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS,
  element: string
}

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED,
  element: string
}

export type TGetOrderFailedActions = 
| IGetOrderRequest
| IGetOrderSuccess
| IGetOrderFailed

