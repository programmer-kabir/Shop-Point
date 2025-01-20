import { configureStore } from "@reduxjs/toolkit";
import categorySlice from './Categories/CategorySlice'
const store = configureStore({
  reducer: {
    categories:categorySlice
  },
});
export default store;