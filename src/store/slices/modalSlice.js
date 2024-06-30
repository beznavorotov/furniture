import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    showOverlay: false,
    data: {},
  },

  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setShowOverlay: (state, action) => {
      state.showOverlay = action.payload;
    },
    setModalData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setShowModal, setShowOverlay, setModalData } =
  modalSlice.actions;
export default modalSlice.reducer;
