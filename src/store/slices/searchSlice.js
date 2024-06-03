import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '../../utils/fetchData';
import { BACKEND_SEARCH } from '../../constants';

export const makeSearch = createAsyncThunk(
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
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchData: (state, action) => (state.data = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(makeSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(makeSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
