import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '@/constants';

const initialState = {
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
  sortBy: 'rating',
  status: STATUS.IDLE,
  error: null,
};

const filterCatalogSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { category, value } = action.payload;

      if (!state[category]) {
        console.error(`Category ${category} not found in filter state.`);
        return;
      }

      if (state[category].includes(value)) {
        state[category] = state[category].filter((item) => item !== value);
      } else {
        state[category].push(value);
      }
    },

    setInputRangeData: (state, action) => {
      const { type, value } = action.payload;

      if (!state[type]) {
        console.error(`Input type category ${type} not found in filter state.`);
        return;
      }
      state[type] = value;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    resetFilters: (state) => {
      state.categories = [];
      state.rooms = [];
      state.manufacturers = [];
      state.collections = [];
      state.colour = [];
      state.price = [];
      state.length = [];
      state.width = [];
      state.height = [];
      state.availability = [];
    },
  },
  selectors: {
    selectCategories: (state) => state.categories,
    selectRooms: (state) => state.rooms,
    selectManufacturers: (state) => state.manufacturers,
    selectCollections: (state) => state.collections,
    selectColour: (state) => state.colour,
    selectAvailability: (state) => state.availability,
    selectLength: (state) => state.length,
    selectWidth: (state) => state.width,
    selectHeight: (state) => state.height,
    selectPrice: (state) => state.price,
  },
});

export const { toggleFilter, setInputRangeData, resetFilters, setSortBy } =
  filterCatalogSlice.actions;

export const {
  selectCategories,
  selectRooms,
  selectManufacturers,
  selectCollections,
  selectColour,
  selectAvailability,
  selectLength,
  selectWidth,
  selectHeight,
  selectPrice,
} = filterCatalogSlice.selectors;

export default filterCatalogSlice.reducer;
