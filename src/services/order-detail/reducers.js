import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from './actions';

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

    default:
      return state;
  }
};
