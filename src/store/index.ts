import { configureStore } from "@reduxjs/toolkit";
import songReducer from "././Reducers/songReducer";

export const store = configureStore({
  reducer: {
    songs: songReducer,
  },
});
