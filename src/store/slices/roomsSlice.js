import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BACKEND_CATEGORIES_URL } from '../../constants';

export const fetchRooms = createAsyncThunk(
  'rooms/fetchRooms',
  // eslint-disable-next-line
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BACKEND_CATEGORIES_URL);

      if (!response.ok) {
        throw new Error('Sorry. Response is not ok...');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default roomsSlice.reducer;
