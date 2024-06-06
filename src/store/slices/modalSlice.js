import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    showOverlay: false,
  },

  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setShowOverlay: (state, action) => {
      state.showOverlay = action.payload;
    },
  },
});

export const { setShowModal, setShowOverlay } = modalSlice.actions;
export default modalSlice.reducer;
