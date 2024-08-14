import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/utils/fetchData';
import { FAVORITES_URL, STATUS } from '@/constants';

const initialState = {
  items: [],
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

export const getFavoriteItems = createAsyncThunk(
  'favorites/getFavoriteItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData(FAVORITES_URL, { method: 'GET' });
      const sortedResponse = response.sort(
        (a, b) => a.item_cart_id - b.item_cart_id,
      );
      return sortedResponse;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addFavoriteItem = createAsyncThunk(
  'favorites/addFavoriteItem',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchData(FAVORITES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ related_item: id }),
      });
      dispatch(getFavoriteItems());
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const delFavoriteItem = createAsyncThunk(
  'favorites/delFavoriteItem',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchData(FAVORITES_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ related_item: id }),
      });
      dispatch(getFavoriteItems());
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.items.push(action.payload);
    },
    removeFavorite(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteItems.pending, handlePending)
      .addCase(getFavoriteItems.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.items = action.payload;
      })
      .addCase(getFavoriteItems.rejected, handleRejected)
      .addCase(addFavoriteItem.pending, handlePending)
      .addCase(addFavoriteItem.fulfilled, (state) => {
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(addFavoriteItem.rejected, handleRejected)
      .addCase(delFavoriteItem.pending, handlePending)
      .addCase(delFavoriteItem.fulfilled, (state) => {
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(delFavoriteItem.rejected, handleRejected);
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
