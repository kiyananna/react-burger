import { logOutReduser, initialStateLogout } from './reducers';
import { LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILED } from './actions';

describe('Проверка разлогина', () => {
  it('проверка начального состояния', () => {
    expect(logOutReduser(undefined, {})).toEqual({
      logOutFailed: false,
      logOutRequest: false,
    });
  });

  it('Проверка запроса разлогина', () => {
    const result = logOutReduser(initialStateLogout, { type: LOG_OUT_REQUEST });
    expect(result).toEqual({
      logOutRequest: true,
      logOutFailed: false,
    });
  });
  it('Проверка успешного запроса разлогина', () => {
    const result = logOutReduser(initialStateLogout, { type: LOG_OUT_SUCCESS });
    expect(result).toEqual({
      logOutRequest: false,
      logOutFailed: false,
    });
  });
  it('Проверка запроса с ошибкой', () => {
    const result = logOutReduser(initialStateLogout, { type: LOG_OUT_FAILED });
    expect(result).toEqual({
      logOutRequest: false,
      logOutFailed: true,
    });
  });
});
