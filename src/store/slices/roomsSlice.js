import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BACKEND_CATEGORIES_URL, STATUS } from '@/constants';
import fetchData from '@/utils/fetchData';

export const fetchRooms = createAsyncThunk(
  'rooms/fetchRooms',
  // eslint-disable-next-line
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(BACKEND_CATEGORIES_URL);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    items: [],
    status: STATUS.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.items = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export default roomsSlice.reducer;
