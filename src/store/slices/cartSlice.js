import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/utils/fetchData';
import {
  STATUS_IDLE,
  CART_URL,
  STATUS_FAILED,
  STATUS_LOADING,
  STATUS_SUCCEEDED,
} from '@/constants';

const initialState = {
  cart: [],
  order: [],
  totalCartItems: 0,
  totalCartPrice: 0,
  status: STATUS_IDLE,
  error: null,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData(CART_URL, { method: 'GET' });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addCartItems = createAsyncThunk(
  'cart/addCartItems',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetchData(CART_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const delCartItem = createAsyncThunk(
  'cart/delCartItem',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchData(CART_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id),
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData(CART_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cart.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.status = STATUS_LOADING;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.cart = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.status = STATUS_FAILED;
        state.error = action.error.message;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.cart = [];
        state.totalCartItems = 0;
        state.totalCartPrice = 0;
        state.status = STATUS_IDLE;
      });
  },
});

export const { setCart, addToCart, removeFromCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
