import { createSlice } from '@reduxjs/toolkit';

const getUniqueValues = (array, key) => {
  return [...new Set(array.map((item) => item[key]))].sort();
};

const filterCatalogSlice = createSlice({
  name: 'filter',
  initialState: {
    categories: [],
    rooms: [],
    manufacturers: [],
    collections: [],
    sortBy: null,
    filterQuery: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    getUniqueCategories: (state, action) => {
      state.categories = getUniqueValues(action.payload, 'item_category');
    },
    getUniqueRooms: (state, action) => {
      state.rooms = getUniqueValues(action.payload, 'room');
    },
    getUniqueManufacturers: (state, action) => {
      state.manufacturers = getUniqueValues(action.payload, 'manufacturer');
    },
    getUniqueCollections: (state, action) => {
      state.collections = getUniqueValues(action.payload, 'collection');
    },
  },
});

export const {
  getUniqueCategories,
  getUniqueRooms,
  getUniqueManufacturers,
  getUniqueCollections,
} = filterCatalogSlice.actions;
export default filterCatalogSlice.reducer;
