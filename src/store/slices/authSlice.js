import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
// для оптимізації імпортів краще створити aliases тобі вони можуть виглядати так "@/constants" або "@/utils"
import { BACKEND_CREATE_USER_URL, BACKEND_LOGIN_URL } from '../../constants';
import fetchData from '../../utils/fetchData';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // send data to server
      const response = await fetchData(BACKEND_LOGIN_URL, {
        method: 'POST',
        // headers - це є в fetchData
        headers: {
          'Content-Type': 'application/json',
        },
        body: credentials,
      });

      const data = response;
      // save data from server to localStorage and cookies
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('user', credentials.username);
      Cookies.set('refreshToken', data.refresh, { httpOnly: true });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetchData(BACKEND_CREATE_USER_URL, {
        method: 'POST',
        headers: {
          // headers - це є в fetchData
          'Content-Type': 'application/json',
        },
        body: credentials,
      });
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  Cookies.remove('refreshToken');
  return {};
});

export const refreshToken = createAsyncThunk('auth/resresh', async () => {});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    isAuth: false,
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
        // loading - винести в константи
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state) => {
        // succeeded - винести в константи
        state.status = 'succeeded';
        state.isAuth = true;
        state.user = localStorage.getItem('user');
        state.accessToken = localStorage.getItem('accessToken');
      })
      .addCase(login.rejected, (state, action) => {
        // failed - винести в константи
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        // idle - винести в константи
        state.status = 'idle';
        state.user = null;
        state.accessToken = null;
        state.isAuth = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
