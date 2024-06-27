import { createSlice } from '@reduxjs/toolkit';
import { STATUS_IDLE } from '@/constants';

const initialState = {
  basket: [],
  totalItems: 0,
  totalPrice: 0,
  status: STATUS_IDLE,
  error: null,
};

const cartSlice = createSlice({ name: 'cart', initialState });

export default cartSlice.reducer;
