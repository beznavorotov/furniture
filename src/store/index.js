import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './slices/roomsSlice';
import authSlice from './slices/authSlice';
import modalSlice from './slices/modalSlice';
import catalogSlice from './slices/catalogSlice';
import searchSlice from './slices/searchSlice';
import filterCatalogSlice from './slices/filterCatalogSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    auth: authSlice,
    modal: modalSlice,
    catalog: catalogSlice,
    search: searchSlice,
    filter: filterCatalogSlice,
  },
});

//використання redux у проекті наразі виглядає, як надлишковий код. Використовується для запитів на сервер та
// зберігання даних, які можна було б зберігати в локальному стейті компонентів. Це тільки ускладнює проект.
