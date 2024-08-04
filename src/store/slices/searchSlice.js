import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/utils/fetchData';
import { BACKEND_SEARCH, STATUS } from '@/constants';

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
    status: STATUS.IDLE,
    error: null,
  },
  reducers: {
    setSearchData: (state, action) => (state.searchResults = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
