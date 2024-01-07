import { API_URL } from '../../constants/constants';
import { CLEAN_USER_INFO } from '../user/actions';
import { CLEAN_LOGIN_INFO } from '../login/actions';
import { AppDispatch, AppThunk } from "../store";

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';


export interface ILogoutRequest {
  readonly type: typeof LOG_OUT_REQUEST
}

export interface ILogoutSuccess {
  readonly type: typeof LOG_OUT_SUCCESS,
}

export interface ILogoutFailed {
  readonly type: typeof LOG_OUT_FAILED,
  payload: string
}

export type TLogoutActions = 
| ILogoutRequest
| ILogoutSuccess
| ILogoutFailed

export const logOut: AppThunk = (token: string) => async (dispatch: AppDispatch) => {
  dispatch({
    type: LOG_OUT_REQUEST,
  });

  try {
    const response = await fetch(`${API_URL}auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    if (response.ok) {
      dispatch({
        type: LOG_OUT_SUCCESS,
      });
      dispatch({
        type: CLEAN_LOGIN_INFO,
      });
      dispatch({
        type: CLEAN_USER_INFO,
      });
    } else {
      response.json().then((err) => Promise.reject(err));
    }
  } catch (error) {
    dispatch({
      type: LOG_OUT_FAILED,
    });
  }
};
