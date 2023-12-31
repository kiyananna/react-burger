import { passwordRecovery } from '../../utils/utils';

export const GET_PASSWORD_REQUEST = 'GET_PASSWORD_REQUEST';
export const GET_PASSWORD_SUCCESS = 'GET_PASSWORD_SUCCESS';
export const GET_PASSWORD_FAILED = 'GET_PASSWORD_FAILED';
export const RECOVER_PASSWORD_CLEAN = 'RECOVER_PASSWORD_CLEAN';
export const GET_PASSWORD_CLEAN = 'GET_PASSWORD_CLEAN';

export const recoverPassword = (email: any) => (dispatch: any) => {
  dispatch({ type: GET_PASSWORD_REQUEST });
  passwordRecovery(email)
    .then((data) => {
      dispatch({ type: GET_PASSWORD_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: GET_PASSWORD_FAILED, payload: err.message });
    });
};

export const cleanRecoverPassword = () => (dispatch: any) => {
  dispatch({ type: GET_PASSWORD_CLEAN });
};
