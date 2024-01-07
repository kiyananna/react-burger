import { registerUser } from '../../utils/utils';
import { AppDispatch, AppThunk } from '../store';
import { TUserLogin } from '../../utils/types';

export const REGISTER_REQUEST = 'REGISTERS_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST
}

export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS,
  payload: TUserLogin
}

export interface IRegisterFailed {
  readonly type: typeof REGISTER_FAILED,
  payload: string
}

export type TRegisterActions = 
| IRegisterRequest
| IRegisterSuccess
| IRegisterFailed

export const register: AppThunk = (name: string, email: string, password: string) => (dispatch: AppDispatch) => {
  console.log('REGISTER');
  dispatch({ type: REGISTER_REQUEST });
  registerUser(name, email, password)
    .then((data) => {
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_FAILED, payload: err.message });
    });
};
