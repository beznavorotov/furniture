import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  BACKEND_CREATE_USER_URL,
  BACKEND_LOGIN_URL,
  STATUS_FAILD,
  STATUS_IDLE,
  STATUS_LOADING,
  STATUS_SUCCEEDED,
  BACKEND_JWT_REFRESH_URL,
} from '@/constants';
import fetchData from '@/utils/fetchData';
import { getAccessToken, setAccessToken, removeTokens, setRefreshToken } from '@/utils/tokenUtils';

// Helper function to safely parse JSON
const safeJSONParse = (item) => {
  try {
    return JSON.parse(item);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

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

      const { access, refresh, user } = response;
      setAccessToken(access);
      setRefreshToken(refresh);
      localStorage.setItem('user', JSON.stringify(user));
      
      return response;
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
    user: safeJSONParse(localStorage.getItem('user')) || null,
    accessToken: getAccessToken(),
    isAuth: !!getAccessToken(),
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
      .addCase(login.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.isAuth = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.access;
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
