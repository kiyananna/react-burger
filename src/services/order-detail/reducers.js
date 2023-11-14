import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from './actions';

const initialState = {
  orderID: '',
};

export const orderReducer = (state = initialState, action) => {
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
