import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.js";

const songsSlice = createSlice({
  name: "songs",
  initialState: data(),
  reducers: {
    songs(state) {
      return state;
    },
  },
});

export const { songs } = songsSlice.actions;
export default songsSlice.reducer;
