import { createSlice } from "@reduxjs/toolkit";

export const convertSlice = createSlice({
  initialState: false,
  name: "convert",
  reducers: {
    convert: (state) => (state ? false : true),
    // decrement: (state) => state - 1,
  },
});

export const { convert } = convertSlice.actions;
export default convertSlice.reducer;
