import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './slices/roomsSlice';
import authSlice from './slices/authSlice';
import modalSlice from './slices/modalSlice';
import catalogSlice from './slices/catalogSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    auth: authSlice,
    modal: modalSlice,
    catalog: catalogSlice,
    search: searchSlice,
  },
});
