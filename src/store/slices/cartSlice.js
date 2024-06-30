import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/utils/fetchData';
import {
  STATUS_IDLE,
  ORDER_URL,
  STATUS_FAILD,
  STATUS_LOADING,
  STATUS_SUCCEEDED,
} from '@/constants';

const initialState = {
  cart: [],
  favorites: [],
  order: [],
  totalCartItems: 0,
  totalCartPrice: 0,
  status: STATUS_IDLE,
  error: null,
};
const token = localStorage.getItem('accessToken');

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(ORDER_URL, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const addCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(ORDER_URL, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => (state.cart = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.cart = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.status = STATUS_FAILD;
        state.error = action.error.message;
      });
  },
});
export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
