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

export const BACKEND_CATEGORIES_PRODUCTS_URL =
  'https://furnishop-back.pp.ua/items/room/category/';
export const BACKEND_ALL_PRODUCTS_URL = `${BACKEND_CATEGORIES_PRODUCTS_URL}items/`;
export const BACKEND_SINGLE_PRODUCT_URL = `${BACKEND_BASE_URL}items/item/`;
export const BACKEND_BESTSELLERS_URL = `${BACKEND_CATEGORIES_PRODUCTS_URL}items/bestsellers`;
export const BACKEND_SALE_URL = `${BACKEND_CATEGORIES_PRODUCTS_URL}items/sales`;
export const BACKEND_SEARCH = `${BACKEND_CATEGORIES_PRODUCTS_URL}items/search/`;

export const CART_URL = `${BACKEND_BASE_URL}orders/cart/`;
export const ORDER_URL = `${BACKEND_BASE_URL}orders/all/`;

// MESSAGES
export const REQUIRED_INPUT_MSG = "Це поле обов'язкове для заповнення";
export const DATA_LOADING_MSG = 'Заждіть секунду...';

// STATUS
export const STATUS_LOADING = 'loading';
export const STATUS_SUCCEEDED = 'succeeded';
export const STATUS_FAILED = 'failed';
export const STATUS_IDLE = 'idle';
