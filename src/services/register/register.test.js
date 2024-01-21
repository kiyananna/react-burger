import { REGISTER_SUCCESS, REGISTER_REQUEST, REGISTER_FAILED } from './actions';
import { registerReducer, initialStateRegister } from './reducers';

describe('Проверка регистрации', () => {
  const registerResponse = {
    success: true,
    user: {
      email: 'anna@test',
      name: 'anna',
    },
    accessToken: 'Bearer fsds8989fsffss',
    refreshToken: 'dsfs8988sffs86f',
  };
  it('Запрос регистрации', () => {
    const result = registerReducer(initialStateRegister, {
      type: REGISTER_REQUEST,
    });
    expect(result.isLoading).toEqual(true);
  });
  it('Проверка на успешную регистрацию', () => {
    const result = registerReducer(initialStateRegister, {
      type: REGISTER_SUCCESS,
      payload: registerResponse,
    });
    expect(result.response).toEqual(registerResponse);
  });
  it('Проверка ошибки регистрации', () => {
    const result = registerReducer(initialStateRegister, {
      type: REGISTER_FAILED,
      payload: 'Ошибка',
    });
    expect(result.errorText).toEqual('Ошибка');
  });
});
