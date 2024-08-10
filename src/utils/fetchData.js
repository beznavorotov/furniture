import { getAccessToken, removeTokens } from './tokenUtils';
import { refreshAccessToken } from './refreshToken';

const fetchData = async (url, options = {}) => {
  const token = getAccessToken();

  if (!options.headers) options.headers = {};
  options.headers['Content-Type'] = 'application/json';

  if (token) {
    options.headers['Authorization'] = 'Bearer ' + token;
  }

  try {
    let response = await fetch(url, options);

    if (response.status === 401) {
      const newToken = await refreshAccessToken();
      if (newToken) {
        options.headers['Authorization'] = 'Bearer ' + newToken;
        response = await fetch(url, options);
      } else {
        removeTokens();
        // window.location.href = '/login';
        throw new Error(
          'Не вдалося оновити доступ. Перенаправлення на сторінку входу.',
        );
      }
    }

    if (response.status === 404) {
      return [];
    }

    if (!response.ok) {
      let errorMessage = `HTTP error! Status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage += `, Message: ${JSON.stringify(errorData)}`;
      } catch (jsonError) {
        errorMessage += ', Unable to parse error message.';
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch data error:', error);
    throw error;
  }
};

export default fetchData;
