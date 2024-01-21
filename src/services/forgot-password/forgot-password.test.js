import { recoverPasswordReducer, initialState } from './reducers';
import {
  GET_PASSWORD_REQUEST,
  GET_PASSWORD_SUCCESS,
  GET_PASSWORD_FAILED,
  RECOVER_PASSWORD_CLEAN,
  GET_PASSWORD_CLEAN,
} from './actions';

describe('Проверка забыли пароль', () => {
  const recoverPasswordResponse = true;
  const failedText = 'Err';

  it('Проверка начального состояния', () => {
    expect(recoverPasswordReducer(undefined, {})).toEqual({
      isLoading: false,
      success: false,
      isRequestSent: false,
      emailRecoverSuccess: false,
      errorText: '',
    });
  });
  it('Проверка запроса забыли пароль', () => {
    expect(
      recoverPasswordReducer(initialState, {
        type: GET_PASSWORD_REQUEST,
      }),
    ).toEqual({
      emailRecoverSuccess: false,
      isLoading: true,
      success: false,
      isRequestSent: true,
      errorText: '',
    });
  });
  it('Проверка успешного запроса забыли пароль', () => {
    const result = recoverPasswordReducer(initialState, {
      type: GET_PASSWORD_SUCCESS,
      res: {
        success: true,
      },
    });

    const expectedState = {
      isLoading: false,
      success: true,
      isRequestSent: false,
      emailRecoverSuccess: true,
      errorText: '',
    };

    expect(result).toEqual(expectedState);
  });
  it('Проверка очистки восстановления пароля', () => {
    expect(
      recoverPasswordReducer(initialState, {
        type: RECOVER_PASSWORD_CLEAN,
      }),
    ).toEqual({
      isLoading: false,
      success: false,
      isRequestSent: false,
      emailRecoverSuccess: false,
      errorText: '',
    });
  });
  it('Проверка очистки состояния', () => {
    expect(
      recoverPasswordReducer(initialState, {
        type: GET_PASSWORD_CLEAN,
      }),
    ).toEqual({
      isLoading: false,
      success: false,
      isRequestSent: false,
      emailRecoverSuccess: false,
      errorText: '',
    });
  });
});
