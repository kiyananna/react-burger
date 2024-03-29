import { passwordReset } from '../../utils/utils';
import { TForgotPass } from '../../utils/types';
import { AppDispatch, AppThunk } from '../store';

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED';
export const PASSWORD_RESET_CLEAN_STATE = 'PASSWORD_RESET_CLEAN_STATE';

export interface IPasswordResetRequest {
  readonly type: typeof PASSWORD_RESET_REQUEST
}

export interface IPasswordResetSuccess {
  readonly type: typeof PASSWORD_RESET_SUCCESS,
  payload: TForgotPass
}

export interface IPasswordResetFailed {
  readonly type: typeof PASSWORD_RESET_FAILED,
  payload: string
}

export interface IPasswordResetClean {
  readonly type: typeof PASSWORD_RESET_CLEAN_STATE,
  payload: string
}

export type TPasswordResetActions = 
| IPasswordResetRequest
| IPasswordResetSuccess
| IPasswordResetFailed
| IPasswordResetClean

export const resetPassword: AppThunk = (pass: string, token: string) => (dispatch: AppDispatch) => {
  dispatch({ type: PASSWORD_RESET_REQUEST });
  passwordReset(pass, token)
    .then((data) => {
      dispatch({ type: PASSWORD_RESET_SUCCESS, payload: data });
    })
    .then(() => {
      dispatch({ type: PASSWORD_RESET_CLEAN_STATE });
    })
    .catch((err) => {
      dispatch({ type: PASSWORD_RESET_FAILED, payload: err.message });
    });
};
