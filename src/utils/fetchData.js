import { getAccessToken, removeTokens } from './tokenUtils';
import { refreshAccessToken } from './refreshToken';

const fetchData = async (url, options = {}) => {
  const token = getAccessToken();

  if (token) {
    if (!options.headers) options.headers = {};
    options.headers['Authorization'] = 'Bearer ' + token;
  }

  let response = await fetch(url, options);

  if (response.status === 401) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      if (!options.headers) options.headers = {};
      options.headers['Authorization'] = 'Bearer ' + newToken;
      response = await fetch(url, options);
    } else {
      removeTokens();
      window.location.href = '/login';
      throw new Error('Не вдалося оновити доступ. Перенаправлення на сторінку входу.');
    }
  }

  if (!response.ok) {
    const message = await response.json();
    throw new Error(`HTTP error! Status: ${response.status}, Message: ${JSON.stringify(message)}`);
  }

  return response.json();
};

export default fetchData;
