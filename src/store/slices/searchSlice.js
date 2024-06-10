import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/utils/fetchData';
import {
  BACKEND_SEARCH,
  STATUS_FAILD,
  STATUS_IDLE,
  STATUS_LOADING,
  STATUS_SUCCEEDED,
} from '@/constants';

export const fetchSearch = createAsyncThunk(
  'search/getData',
  // eslint-disable-next-line
  async (query, { rejectWithValue }) => {
    try {
      return await fetchData(`${BACKEND_SEARCH}?search=${query}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    status: STATUS_IDLE,
    error: null,
  },
  reducers: {
    setSearchData: (state, action) => (state.searchResults = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = STATUS_FAILD;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
