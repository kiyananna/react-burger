import { TOptions } from '../../utils/types';

import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  TGetOrderFailedActions,
  // TOrderResponse
} from './actions';

const initialState: TOrderDetailState = {
  orderID: '',
};

export type TOrderResponse = {
  orderID?: string,
}


export const orderReducer = (state:TOrderDetailState = initialState, action: TGetOrderFailedActions): TOrderDetailState => {
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
        orderID: 'fgfg'
      };
    }
    default:
      return state;
  }
};

type TOrderDetailState = {
  orderID: string | undefined,
}
