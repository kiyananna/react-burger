import { registerUser } from '../../utils/utils';

export const REGISTER_REQUEST = 'REGISTERS_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const register = (name: any, email: any, password: any) => (dispatch: any) => {
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
