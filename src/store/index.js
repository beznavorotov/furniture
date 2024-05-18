import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './slices/roomsSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    auth: authSlice,
  },
});
