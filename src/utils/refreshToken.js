import fetchData from '@/utils/fetchData';
import { getRefreshToken, setAccessToken, removeTokens } from './tokenUtils';
import { BACKEND_JWT_REFRESH_URL } from '@/constants';

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const response = await fetchData(BACKEND_JWT_REFRESH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    const { access } = response;
    setAccessToken(access);
    return access;
  } catch (error) {
    removeTokens();
    return null;
  }
};
