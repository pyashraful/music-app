import data from "../../data.js";
import { CURRENT_SONG, SET_SONG } from "../Actions/songAction";

const initialState = {
  ...data(),
};
console.log("🚀 ~ file: songReducer.ts ~ line 5 ~ initialState", initialState);

export const songReducer = (state = initialState, action) => {
  if (action.type === CURRENT_SONG) {
    return {
      song: data(),
    };
  }
};
