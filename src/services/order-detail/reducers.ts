import { TOptions } from '../../utils/types';
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  TGetOrderFailedActions,
  // TOrderResponse
} from './actions';

const initialState = {
  orderID: '',
};

export type TOrderResponse = {
  orderID?: string,
}


export const orderReducer = (state = initialState, action: TGetOrderFailedActions) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return { ...state, orderID: '' };
    }
    case GET_ORDER_SUCCESS: {
      return { ...state, orderID: action.element };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderID: 'fgfg',
        errorText: action.element,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

// type TOrderDetailState = {
//   order: TOptions | undefined,
//   isLoading: boolean,
//   error: boolean,
//   errorText: string
// }
