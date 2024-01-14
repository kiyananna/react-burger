import { loginUser, setCookie } from '../../utils/utils';
import { AppDispatch, AppThunk } from '../store';

export const LOGIN_REQUEST = 'LOGINS_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const CLEAN_LOGIN_INFO = 'CLEAN_LOGIN_INFO';

export type TUserLogin = {
  success: boolean,
  accessToken: string,
  refreshToken: string,
  user: {
      email: string,
      name: string
  }
}

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS,
  payload: TUserLogin
}

export interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED,
  payload: string
}

export interface ICleanLoginInfo {
  readonly type: typeof CLEAN_LOGIN_INFO,
}

export type TLoginActions = 
| ILoginRequest
| ILoginSuccess
| ILoginFailed
| ICleanLoginInfo


export const login: AppThunk = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  loginUser(email, password)
    .then((data) => {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      setCookie('accessToken', data.accessToken);
      setCookie('refreshToken', data.refreshToken);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err.message });
    });
};

export const cleanLoginInfo = () => {
  return {
    type: CLEAN_LOGIN_INFO,
  };
};
