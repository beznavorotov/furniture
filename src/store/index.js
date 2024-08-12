import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './slices/roomsSlice';
import authSlice from './slices/authSlice';
import modalSlice from './slices/modalSlice';
import catalogSlice from './slices/catalogSlice';
import searchSlice from './slices/searchSlice';
import filterCatalogSlice from './slices/filterCatalogSlice';
import cartSlice from './slices/cartSlice';
import favoritesSlice from './slices/favoritesSlice';
import userInfoSlice from './slices/userInfoSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    auth: authSlice,
    modal: modalSlice,
    catalog: catalogSlice,
    search: searchSlice,
    filter: filterCatalogSlice,
    cart: cartSlice,
    favorites: favoritesSlice,
    userInfo: userInfoSlice,
  },
});
