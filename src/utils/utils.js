export const API_URL = 'https://norma.nomoreparties.space/api/';

export const loadPost = async (url) => {
  const response = await fetch(url);
  return checkResponse(response);
};

export const postOrder = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ingredients: body,
    }),
  });
  return checkResponse(response);
};

export const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  return response.json();
};

export const registerUser = async (name, email, password) => {
  const response = await fetch(`${API_URL}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
  return await checkResponse(response);
};

const refreshToken = (token) => {
  return fetch(`${API_URL}auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      token: `${token}`,
    }),
  });
};

export const passwordRecovery = async (email) => {
  const response = await fetch(`${API_URL}password-reset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
    }),
  });
  return await checkResponse(response);
};

export const passwordReset = async (pass, token) => {
  const response = await fetch(`${API_URL}password-reset/reset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: pass,
      token: token,
    }),
  });
  return await checkResponse(response);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (
      // Срок действия токена истек
      err.message === 'jwt expired' ||
      // Недопустимый формат токена
      err.message === 'jwt malformed' ||
      // Недействительный токен
      err.message === 'Token is invalid' ||
      // Неверный токен
      err.message === 'invalid token'
    ) {
      const refreshData = await refreshToken(getCookie('refreshToken'));
      await checkResponse(refreshData).then((refreshData) => {
        options.headers.Authorization = refreshData.accessToken;
        setCookie('accessToken', refreshData.accessToken);
        setCookie('refreshToken', refreshData.refreshToken);
      });
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return await checkResponse(response);
};

export function setCookie(name, value, age) {
  if (value === null) {
    return (document.cookie = `${name}=${'value'}; path=/; max-age=${age}`);
  }
  if (name === 'accessToken') {
    const authToken = value.split('Bearer ')[1];
    document.cookie = `${name}=${authToken}; path=/`;
  }
  if (name === 'refreshToken') {
    document.cookie = `${name}=${value}; path=/`;
  }
}

export function getCookie(name) {
  const cookies = document.cookie.split(';');

  const cookieObjects = cookies.map((cookie) => {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    return { name: cookieName, value: decodeURIComponent(cookieValue) };
  });

  const matchedCookie = cookieObjects.find((cookie) => cookie.name === name);

  return matchedCookie ? matchedCookie.value : undefined;
}

export function deleteCookie(name) {
  setCookie(name, null, -1);
}
