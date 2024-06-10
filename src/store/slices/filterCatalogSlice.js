import { createSlice } from '@reduxjs/toolkit';
import { STATUS_IDLE } from '../../constants';

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
    сolor: [],
    sortBy: null,
    filterQuery: {},
    status: STATUS_IDLE,
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
    getUniqueColors: (state, action) => {
      state.сolor = getUniqueValues(action.payload, 'colour');
    },
  },
});

export const {
  getUniqueCategories,
  getUniqueRooms,
  getUniqueManufacturers,
  getUniqueCollections,
  getUniqueColors,
} = filterCatalogSlice.actions;
export default filterCatalogSlice.reducer;
