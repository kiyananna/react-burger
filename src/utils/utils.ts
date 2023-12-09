export const API_URL = 'https://norma.nomoreparties.space/api/';



export const loadPost = async (url: string) => {
  const response = await fetch(url);
  return checkResponse(response);
};

export const postOrder = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ingredients: body,
    }),
  });
  return checkResponse(response);
};

export const checkResponse = (response: any) => {
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  return response.json();
};

export const registerUser = async (name: string, email: string, password: string) => {
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

const refreshToken = (token: string | undefined) => {
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

export const passwordRecovery = async (email: string) => {
  const response = await fetch(`${API_URL}password-reset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
    }),
  });
  return await checkResponse(response);
};

export const passwordReset = async (pass: string, token: string) => {
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

export const fetchWithRefresh = async (url: string, options: any) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (
      // Срок действия токена истек
      (err as { message: string }).message === 'jwt expired' ||
      // Недопустимый формат токена
      (err as { message: string }).message === 'jwt malformed' ||
      // Недействительный токен
      (err as { message: string }).message === 'Token is invalid' ||
      // Неверный токен
      (err as { message: string }).message === 'invalid token'
    ) {
      const refreshData = await refreshToken(getCookie('refreshToken'));
      await checkResponse(refreshData).then((refreshData : any) => {
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

export const loginUser = async (email: string, password: string) => {
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

export function setCookie(name: string, value: string | null, age?: number) {
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

export function getCookie(name: string | undefined) {
  const cookies = document.cookie.split(';');

  const cookieObjects = cookies.map((cookie) => {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    return { name: cookieName, value: decodeURIComponent(cookieValue) };
  });

  const matchedCookie = cookieObjects.find((cookie) => cookie.name === name);

  return matchedCookie ? matchedCookie.value : undefined;
}

export function deleteCookie(name: string) {
  setCookie(name, null, -1);
}


