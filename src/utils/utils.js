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
