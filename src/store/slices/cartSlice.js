import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/utils/fetchData';
import { CART_URL, STATUS } from '@/constants';

const initialState = {
  cart: [],
  order: [],
  totalCartItems: 0,
  totalCartPrice: 0,
  status: STATUS.IDLE,
  error: null,
};

const handlePending = (state) => {
  state.status = STATUS.LOADING;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.status = STATUS.FAILED;
  state.error = action.payload || action.error.message;
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData(CART_URL, { method: 'GET' });
      const sortedResponse = response.sort(
        (a, b) => a.item_cart_id - b.item_cart_id,
      );
      return sortedResponse;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addCartItems = createAsyncThunk(
  'cart/addCartItems',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchData(CART_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      dispatch(getCartItems());
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const delCartItem = createAsyncThunk(
  'cart/delCartItem',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchData(CART_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_cart_id: id }),
      });
      dispatch(getCartItems());
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, handlePending)
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.totalCartItems = action.payload.length;
        state.cart = action.payload;
      })
      .addCase(getCartItems.rejected, handleRejected)
      .addCase(addCartItems.pending, handlePending)
      .addCase(addCartItems.fulfilled, (state) => {
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(addCartItems.rejected, handleRejected)
      .addCase(delCartItem.fulfilled, (state) => {
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.cart = [];
        state.totalCartItems = 0;
        state.totalCartPrice = 0;
        state.status = STATUS.IDLE;
      });
  },
});

export default cartSlice.reducer;
