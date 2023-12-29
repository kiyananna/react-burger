import { deleteCookie } from '../../utils/utils';
import { LOG_OUT_REQUEST, LOG_OUT_FAILED, LOG_OUT_SUCCESS,  TLogoutActions } from './actions';

const initialState = {
  logOutRequest: false,
  logOutFailed: false,
};

type TLogoutState = {
  logOutRequest: boolean,
  logOutFailed: boolean,
}

export const logOutReduser = (state: TLogoutState  = initialState, action: TLogoutActions) => {
  switch (action.type) {
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        logOutRequest: true,
        logOutFailed: false,
      };
    }
    case LOG_OUT_SUCCESS: {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      return {
        ...state,
        logOutRequest: false,
      };
    }
    case LOG_OUT_FAILED: {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      return {
        ...state,
        logOutRequest: false,
        logOutFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
