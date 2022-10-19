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

// import { createSlice } from "@reduxjs/toolkit";

// const stateSlice = createSlice({
//   name: "state",
//   initialState: { value: "" },
//   reducers: {
//     function1(state, action) {
//       state.value = action.payload;
//      },
//      function2(state){
//       state.value = 0
//      }
//    },
// });
// export const { function1, function2 } = stateSlice.actions;
// export default stateSlice.reducer;
