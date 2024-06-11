import { createSlice } from '@reduxjs/toolkit';
import { STATUS_IDLE } from '@/constants';

const filterCatalogSlice = createSlice({
  name: 'filter',
  initialState: {
    categories: [],
    rooms: [],
    manufacturers: [],
    collections: [],
    colour: [],
    sortBy: null,
    filterQuery: {},
    status: STATUS_IDLE,
    error: null,
  },
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

    resetFilters: (state) => {
      state.categories = [];
      state.rooms = [];
      state.manufacturers = [];
      state.collections = [];
      state.colour = [];
    },
  },
});

export const { toggleFilter, resetFilters } = filterCatalogSlice.actions;
export default filterCatalogSlice.reducer;
