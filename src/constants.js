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

// STATUS
export const STATUS = {
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
  IDLE: 'idle',
};

// MESSAGES
export const MESSAGES = {
  DATA_IS_LOADING: 'Заждіть секунду...',
  // FORM AND INPUTS MESSAGES
  CREATE_USER: 'Створити аккаунт',
  INPUT_REQUIRED: "Це поле обов'язкове для заповнення",
  FIRSTNAME_IS_EMPTY: 'Ім’я не вказано!',
  LASTNAME_IS_EMPTY: 'Прізвище не вказано!',
  EMAIL_IS_EMPTY: 'Email не вказано!',
  EMAIL_IS_INCORRECT: 'Некоректний Email',
  PASS_IS_EMPTY: 'Пароль не вказано!',
  PASS_IS_INCORRECT: 'Пароль повинен бути не менше 8 символів!',
  CONFIRM_PASS_IS_WRONG: 'Паролі не збігаються!',
  POLICY_NOT_CHECKED: 'Політика конфіденційності не відмічена!',
};

// COLOR
export const COLOR = {
  BLUE: '#003ca6',
};
