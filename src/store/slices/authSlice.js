import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  BACKEND_CREATE_USER_URL,
  BACKEND_LOGIN_URL,
  STATUS,
  BACKEND_JWT_REFRESH_URL,
} from '@/constants';
import fetchData from '@/utils/fetchData';
import {
  getAccessToken,
  setAccessToken,
  removeTokens,
  setRefreshToken,
} from '@/utils/tokenUtils';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetchData(BACKEND_LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { access, refresh } = response;
      setAccessToken(access);
      setRefreshToken(refresh);

      return { access };
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
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData(BACKEND_JWT_REFRESH_URL, {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        const { access } = response;
        setAccessToken(access);
        return access;
      } else {
        return rejectWithValue('Failed to refresh token');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  removeTokens();
  localStorage.removeItem('user');
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: getAccessToken(),
    isAuth: !!getAccessToken(),
    status: STATUS.IDLE,
    error: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.isAuth = true;
        state.accessToken = action.payload.access;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.payload;
      })
      // logOut
      .addCase(logout.fulfilled, (state) => {
        state.status = STATUS.IDLE;
        state.isAuth = false;
        state.accessToken = null;
      })
      // signUp
      .addCase(signup.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.payload;
      })
      // refresh
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      });
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
