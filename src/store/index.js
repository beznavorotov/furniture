import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './slices/roomsSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
  },
});
