import { fetchWithRefresh } from '../../utils/utils';
export const API_URL = 'https://norma.nomoreparties.space/api/';

export const REFRESH_USER_INFO_REQUEST = 'REFRESH_USER_INFO_REQUEST';
export const REFRESH_USER_INFO_SUCCESS = 'REFRESH_USER_INFO_SUCCESS';
export const REFRESH_USER_INFO_FAILED = 'REFRESH_USER_INFO_FAILED';
export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILED = 'GET_USER_INFO_FAILED';
export const CLEAN_USER_INFO = 'CLEAN_USER_INFO';

export const refreshUserInfo = (userName: any, email: any, pass: any, token: any) => (dispatch: any) => {
  dispatch({
    type: REFRESH_USER_INFO_REQUEST,
  });
  fetchWithRefresh(`${API_URL}auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
      password: pass,
      name: userName,
    }),
  })
    .then((res) => {
      if (res) {
        dispatch({
          type: REFRESH_USER_INFO_SUCCESS,
          res: res,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REFRESH_USER_INFO_FAILED,
      });
    });
};

export const getUserInfo = (token: any) => (dispatch: any) => {
  dispatch({
    type: GET_USER_INFO_REQUEST,
  });
  fetchWithRefresh(`${API_URL}auth/user`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res) {
        dispatch({
          type: GET_USER_INFO_SUCCESS,
          res: res,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_USER_INFO_FAILED,
      });
    });
};

export const cleanUserInfo = () => {
  return {
    type: CLEAN_USER_INFO,
  };
};
