import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  BACKEND_ALL_PRODUCTS_URL,
  BACKEND_BESTSELLERS_URL,
  BACKEND_CATEGORIES_PRODUCTS_URL,
  BACKEND_SALE_URL,
} from '../../constants';
import fetchData from '../../utils/fetchData';

// Дублюються функції це надлишковий код

export const fetchCategory = createAsyncThunk(
  'catalog/category',
  // eslint-disable-next-line
  async (id, { rejectWithValue }) => {
    try {
      return await fetchData(`${BACKEND_CATEGORIES_PRODUCTS_URL}${id}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchBestsellers = createAsyncThunk(
  'catalog/bestsellers',
  // eslint-disable-next-line
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(BACKEND_BESTSELLERS_URL);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchSale = createAsyncThunk(
  'catalog/sale',
  // eslint-disable-next-line
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(BACKEND_SALE_URL);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchAllProducts = createAsyncThunk(
  'catalog/all',
  // eslint-disable-next-line
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(BACKEND_ALL_PRODUCTS_URL);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    category: [],
    bestsellers: [],
    sale: [],
    allProducts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setCategory: (state, action) => (state.category = action.payload),
    setBestsellers: (state, action) => (state.bestsellers = action.payload),
    setSale: (state, action) => (state.sale = action.payload),
    setAllProducts: (state, action) => (state.allProducts = action.payload),
  },
  extraReducers: (builder) => {
    builder
      // fetchCategory
      .addCase(fetchCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // fetchBestsellers
      .addCase(fetchBestsellers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBestsellers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bestsellers = action.payload;
      })
      .addCase(fetchBestsellers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // fetchSale
      .addCase(fetchSale.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSale.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sale = action.payload;
      })
      .addCase(fetchSale.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // fetchAllProducts
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.catalog = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setBestsellers, setSale, setAllProducts } =
  catalogSlice.actions;
export default catalogSlice.reducer;
