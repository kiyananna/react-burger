import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_CLEAN_STATE,
} from './actions';
import { passwordResetReduser, initialStateResetPass } from './reducers';

describe('Проверка сброса', () => {
  const response = {
    passwordResetFailed: false,
    passwordResetRequest: false,
    response: {
      message: 'Password successfully reset',
      success: true,
    },
  };

  it('Проверка запроса сброса пароля', () => {
    const result = passwordResetReduser(initialStateResetPass, {
      type: PASSWORD_RESET_REQUEST,
    });
    expect(result).toEqual({
      passwordResetRequest: true,
      passwordResetFailed: false,
      response: null,
    });
  });
  it('Проварка успешного сброса пароля', () => {
    const result = passwordResetReduser(initialStateResetPass, {
      type: PASSWORD_RESET_SUCCESS,
      payload: response,
    });
    expect(result.response).toEqual(response);
  });
  it('Проверка сброса пароля с ошибкой', () => {
    const result = passwordResetReduser(initialStateResetPass, {
      type: PASSWORD_RESET_FAILED,
    });
    expect(result).toEqual({
      passwordResetRequest: false,
      passwordResetFailed: true,
      response: null,
    });
  });
  it('Проверка очистки состояния', () => {
    const result = passwordResetReduser(initialStateResetPass, {
      type: PASSWORD_RESET_CLEAN_STATE,
    });
    expect(result).toEqual({
      passwordResetRequest: false,
      passwordResetFailed: false,
      response: null,
    });
  });
});
