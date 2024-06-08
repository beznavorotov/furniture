const SHORT_CATEGORY_URL = 'https://furnishop-back.pp.ua/items/room/category/';

// API
export const BACKEND_BASE_URL = 'https://furnishop-back.pp.ua/';

export const BACKEND_CREATE_USER_URL =
  'https://furnishop-back.pp.ua/users/create-user/';

export const BACKEND_LOGIN_URL =
  'https://furnishop-back.pp.ua/users/get-token/';

export const BACKEND_JWT_REFRESH_URL =
  'https://furnishop-back.pp.ua/users/refresh-token/';

export const BACKEND_CATEGORIES_URL =
  'https://furnishop-back.pp.ua/items/room/';

// BACKEND_CATEGORIES_PRODUCTS_URL - ДУБЛЮЄТЬСЯ
export const BACKEND_CATEGORIES_PRODUCTS_URL = SHORT_CATEGORY_URL;
export const BACKEND_ALL_PRODUCTS_URL = `${SHORT_CATEGORY_URL}items/`;
export const BACKEND_BESTSELLERS_URL = `${SHORT_CATEGORY_URL}items/bestsellers`;
export const BACKEND_SALE_URL = `${SHORT_CATEGORY_URL}items/sales`;
export const BACKEND_SEARCH = `${SHORT_CATEGORY_URL}items/search/`;

// MESSAGES
// не використовується
export const REQUIRED_INPUT_MSG = "Це поле обов'язкове для заповнення";
