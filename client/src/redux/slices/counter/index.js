import { createSlice } from "@reduxjs/toolkit";

export const convertSlice = createSlice({
  initialState: false,
  name: "convert",
  reducers: {
    // user: (state, action) => {
    //   state.value = action.payload;
    // },
    convert: (state) => (state ? false : true),
    // decrement: (state) => state - 1,
  },
});

export const { convert } = convertSlice.actions;
export default convertSlice.reducer;
