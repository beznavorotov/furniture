import Cookies from 'js-cookie';

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const getRefreshToken = () => {
  return Cookies.get('refreshToken');
};

export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

export const setRefreshToken = (token) => {
  Cookies.set('refreshToken', token, { expires: 7 }); 
};

export const removeTokens = () => {
  localStorage.removeItem('accessToken');
  Cookies.remove('refreshToken');
};
