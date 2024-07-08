import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  BACKEND_ALL_PRODUCTS_URL,
  BACKEND_BESTSELLERS_URL,
  BACKEND_CATEGORIES_PRODUCTS_URL,
  BACKEND_SALE_URL,
  STATUS_FAILED,
  STATUS_IDLE,
  STATUS_LOADING,
  STATUS_SUCCEEDED,
} from '@/constants';
import fetchData from '@/utils/fetchData';
import getUniqueValues from '@/utils/getUniqueValues';

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
    activeState: null,
    category: [],
    bestsellers: [],
    sale: [],
    allProducts: [],
    // category unique values for sidebar filter
    uniqueValues: {
      categories: [],
      rooms: [],
      manufacturers: [],
      collections: [],
      colour: [],
      length: [],
      width: [],
      height: [],
      availability: [],
      price: [],
    },
    status: STATUS_IDLE,
    error: null,
  },
  reducers: {
    setCategory: (state, action) => (state.category = action.payload),
    setBestsellers: (state, action) => (state.bestsellers = action.payload),
    setSale: (state, action) => (state.sale = action.payload),
    setAllProducts: (state, action) => (state.allProducts = action.payload),
    setActiveState: (state, action) => (state.activeState = action.payload),

    setUniqueData: (state, action) => {
      const { data, name } = action.payload;
      state.uniqueValues[name] = data;
    },

    getUniqueCategories: (state, action) => {
      state.uniqueValues.categories = getUniqueValues(
        action.payload,
        'item_category',
      );
    },
    getUniqueRooms: (state, action) => {
      state.uniqueValues.rooms = getUniqueValues(action.payload, 'room');
    },
    getUniqueManufacturers: (state, action) => {
      state.uniqueValues.manufacturers = getUniqueValues(
        action.payload,
        'manufacturer',
      );
    },
    getUniqueCollections: (state, action) => {
      state.uniqueValues.collections = getUniqueValues(
        action.payload,
        'collection',
      );
    },
    getUniqueColors: (state, action) => {
      state.uniqueValues.colour = getUniqueValues(action.payload, 'colour');
    },
    getUniqueLength: (state, action) => {
      state.uniqueValues.length = getUniqueValues(action.payload, 'length');
    },
    getUniqueWidth: (state, action) => {
      state.uniqueValues.width = getUniqueValues(action.payload, 'width');
    },
    getUniqueHeight: (state, action) => {
      state.uniqueValues.height = getUniqueValues(action.payload, 'height');
    },
    getUniquePrice: (state, action) => {
      state.uniqueValues.price = getUniqueValues(action.payload, 'discount');
    },
    getUniqueAvailability: (state, action) => {
      state.uniqueValues.availability = getUniqueValues(
        action.payload,
        'availability',
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchCategory
      .addCase(fetchCategory.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = STATUS_FAILED;
        state.error = action.error.message;
      })

      // fetchBestsellers
      .addCase(fetchBestsellers.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(fetchBestsellers.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.bestsellers = action.payload;
      })
      .addCase(fetchBestsellers.rejected, (state, action) => {
        state.status = STATUS_FAILED;
        state.error = action.error.message;
      })

      // fetchSale
      .addCase(fetchSale.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(fetchSale.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.sale = action.payload;
      })
      .addCase(fetchSale.rejected, (state, action) => {
        state.status = STATUS_FAILED;
        state.error = action.error.message;
      })

      // fetchAllProducts
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.catalog = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = STATUS_FAILED;
        state.error = action.error.message;
      });
  },
});

export const {
  setCategory,
  setBestsellers,
  setSale,
  setAllProducts,
  setActiveState,
  getUniqueCategories,
  getUniqueRooms,
  getUniqueManufacturers,
  getUniqueCollections,
  getUniqueColors,
  getUniqueLength,
  getUniqueWidth,
  getUniqueHeight,
  getUniqueAvailability,
  getUniquePrice,
} = catalogSlice.actions;
export default catalogSlice.reducer;
