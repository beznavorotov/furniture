import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { BACKEND_LOGIN_URL } from '../../constants';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // send data to server
      const response = await fetch(BACKEND_LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      console.log(credentials);

      if (!response.ok) {
        throw new Error('Something goes wrong with log in');
      }

      const data = await response.json();
      // save data from server to localStorage and cookies
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('user', credentials.username);
      Cookies.set('refreshToken', data.refresh, { httpOnly: true });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  Cookies.remove('refreshToken');
  return {};
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('user') || null,
    accessToken: localStorage.getItem('accessToken') || null,
    status: 'idle',
    error: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.user = null;
        state.token = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
