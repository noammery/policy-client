import { createSlice } from "@reduxjs/toolkit";

const theUserSlice = createSlice({
  name: "theUser",
  initialState: { name: "", price: 0 },
  reducers: {
    update(state, action) {
      state.name = action.payload;
    },
  },
});
export const { update } = theUserSlice.actions;
export default theUserSlice.reducer;
