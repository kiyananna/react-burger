import { passwordRecovery } from '../../utils/utils';
import { TForgotPass } from '../../utils/types';
import { AppDispatch, AppThunk } from '../store';

export const GET_PASSWORD_REQUEST = 'GET_PASSWORD_REQUEST';
export const GET_PASSWORD_SUCCESS = 'GET_PASSWORD_SUCCESS';
export const GET_PASSWORD_FAILED = 'GET_PASSWORD_FAILED';
export const RECOVER_PASSWORD_CLEAN = 'RECOVER_PASSWORD_CLEAN';
export const GET_PASSWORD_CLEAN = 'GET_PASSWORD_CLEAN';


export interface IGetPasswordRequest {
  readonly type: typeof GET_PASSWORD_REQUEST
}

export interface IGetPasswordSuccess {
  readonly type: typeof GET_PASSWORD_SUCCESS,
  readonly res: TForgotPass
}

export interface IGetPasswordFailed {
  readonly type: typeof GET_PASSWORD_FAILED,
  readonly res: TForgotPass
}

export interface IRecoverPasswordClean {
  readonly type: typeof RECOVER_PASSWORD_CLEAN
}

export interface IGetPasswordClean {
  readonly type: typeof GET_PASSWORD_CLEAN
}

export type TForgotPasswordActions = 
| IGetPasswordRequest
| IGetPasswordSuccess
| IGetPasswordFailed
| IRecoverPasswordClean
| IGetPasswordClean


export const recoverPassword = (email: string) => (dispatch: AppDispatch) => {
  dispatch({ type: GET_PASSWORD_REQUEST });
  passwordRecovery(email)
    .then((data) => {
      dispatch({ type: GET_PASSWORD_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: GET_PASSWORD_FAILED, payload: err.message });
    });
};

export const cleanRecoverPassword = () => (dispatch: AppDispatch) => {
  dispatch({ type: GET_PASSWORD_CLEAN });
};
