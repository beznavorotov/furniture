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
        body: JSON.stringify({ item_cart_id: id }),
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
    setTotalCartItems: (state, action) => {
      state.totalCartItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.cart = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(addCartItems.fulfilled, (state, action) => {
        // const { item_cart_id, item } = action.payload;
        // state.cart = { item_cart_id: item_cart_id, item };
        console.log(action);
        // state.cart = action.payload.item;
      })
      .addCase(delCartItem.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.cart = action.payload;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.cart = [];
        state.totalCartItems = 0;
        state.totalCartPrice = 0;
        state.status = STATUS.IDLE;
      });
  },
});

export const { setCart, addToCart, removeFromCart, setTotalCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
