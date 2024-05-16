import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRooms = createAsyncThunk('rooms/fetchAllRooms', async () => {
  const response = await fetch('http://3.75.92.220:8000/items/room/');

  if (!response.ok) {
    throw new Error('Sorry. Response is not ok...');
  }

  const data = await response.json();
  return data;
});

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
