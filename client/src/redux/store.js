import { configureStore } from "@reduxjs/toolkit";
import convertSlice from "./slices/counter/index";
// import userSlice from "./slices/counter/index";

export const store = configureStore({
  reducer: {
    convert: convertSlice,
  },
});
