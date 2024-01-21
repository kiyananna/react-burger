import {
  REFRESH_USER_INFO_REQUEST,
  REFRESH_USER_INFO_SUCCESS,
  REFRESH_USER_INFO_FAILED,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
} from './actions';
import { initialStateUser, userReduser } from './reducers';

describe('Проверкка пользователя', () => {
  const response = {
    success: true,
    user: {
      name: 'name',
      email: 'email@test',
    },
  };

  it('Проверка запроса обновления информации о пользователе', () => {
    const result = userReduser(initialStateUser, {
      type: REFRESH_USER_INFO_REQUEST,
    });
    expect(result.userRefreshRequest).toEqual(true);
  });
  it('Проверка успешного запроса на обновление информации о пользователе', () => {
    const result = userReduser(initialStateUser, {
      type: REFRESH_USER_INFO_SUCCESS,
      payload: response,
    });
    expect(result.userName).toEqual(response.user.name);
  });
  it('Проверка запроса на обновление информации о пользователе с ошибкой', () => {
    const result = userReduser(initialStateUser, {
      type: REFRESH_USER_INFO_FAILED,
    });
    expect(result.userRefreshFailed).toEqual(true);
  });
  it('Проверка запроса на получение информации о пользователе', () => {
    const result = userReduser(initialStateUser, {
      type: GET_USER_INFO_REQUEST,
    });
    expect(result.userInfoRequest).toEqual(true);
  });
  it('Проверка успешного запроса на получение информации о пользователе', () => {
    const result = userReduser(initialStateUser, {
      type: GET_USER_INFO_SUCCESS,
      payload: response,
    });
    expect(result.authChecked).toEqual(true);
  });
  it('Проверка запроса с ошибкой на получение информации о пользователе', () => {
    const result = userReduser(initialStateUser, {
      type: GET_USER_INFO_FAILED,
    });
    expect(result.userInfoFailed).toEqual(true);
  });
});
