import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import {
  BACKEND_CREATE_USER_URL,
  BACKEND_LOGIN_URL,
  STATUS_FAILD,
  STATUS_IDLE,
  STATUS_LOADING,
  STATUS_SUCCEEDED,
} from '@/constants';
import fetchData from '@/utils/fetchData';
import { BACKEND_JWT_REFRESH_URL } from '../../constants';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // send data to server
      const response = await fetchData(BACKEND_LOGIN_URL, {
        method: 'POST',
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
        body: credentials,
      });
      return response;
    } catch (error) {
      console.error('Signup error: ', error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const refreshToken = createAsyncThunk(
  'auth/resresh',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData(BACKEND_JWT_REFRESH_URL, {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        localStorage.setItem('accessToken', response.access);
        return response.access;
      } else {
        return rejectWithValue(response);
      }
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

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    isAuth: false,
    status: STATUS_IDLE,
    error: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.status = STATUS_LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.status = STATUS_SUCCEEDED;
        state.isAuth = true;
        state.user = localStorage.getItem('user');
        state.accessToken = localStorage.getItem('accessToken');
      })
      .addCase(login.rejected, (state, action) => {
        state.status = STATUS_FAILD;
        state.error = action.payload;
      })
      // logOut
      .addCase(logout.fulfilled, (state) => {
        state.status = STATUS_IDLE;
        state.user = null;
        state.isAuth = false;
        state.accessToken = null;
        localStorage.removeItem('accessToken');
      })
      // signUp
      .addCase(signup.pending, (state) => {
        state.status = STATUS_LOADING;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = STATUS_FAILD;
        state.error = action.payload;
      })
      // refresh
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      });
  },
});

export const { setUser, setAuth } = authSlice.actions;
export default authSlice.reducer;
