import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/utils/fetchData';
import { USER_INFO_URL, STATUS } from '@/constants';

const initialState = {
  data: [],
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

export const getUserInfo = createAsyncThunk(
  'userInfo/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData(USER_INFO_URL, { method: 'GET' });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, handlePending)
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.items = action.payload;
        console.log(action.payload);
      })
      .addCase(getUserInfo.rejected, handleRejected);
  },
});

export default userInfoSlice.reducer;
