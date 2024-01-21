import { loginReducer, initialState } from './reducers';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAN_LOGIN_INFO,
} from './actions';

describe('Проверка запроса логина', () => {
  const loginRes = {
    success: true,
    accessToken: 'Bearer sfd87',
    refreshToken: 'fds788',
    user: {
      email: 'anna@test.com',
      name: 'anna',
    },
  };

  it('Проверка начального состояния', () => {
    expect(loginReducer(undefined, {})).toEqual({
      loginData: undefined,
      isLoading: false,
      errorText: '',
    });
  });

  it('Проверка запроса логина', () => {
    const result = loginReducer(initialState, { type: LOGIN_REQUEST });
    expect(result.isLoading).toEqual(true);
  });
  it('Проверка успеха запроса', () => {
    const result = loginReducer(initialState, {
      type: LOGIN_SUCCESS,
      payload: loginRes,
    });
    expect(result.loginData).toEqual(loginRes);
  });
  it('Проверка запроса с ошибкой', () => {
    const result = loginReducer(initialState, {
      type: LOGIN_FAILED,
      payload: 'errorText',
    });
    expect(result.errorText).toEqual('errorText');
  });
  it('Проверка очистки', () => {
    const result = loginReducer(initialState, { type: CLEAN_LOGIN_INFO });
    expect(result).toEqual({
      loginData: undefined,
      isLoading: false,
      errorText: '',
    });
  });
});
