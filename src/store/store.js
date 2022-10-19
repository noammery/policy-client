import { configureStore } from "@reduxjs/toolkit";
import theUserSlice from "../reducers/theUserSlice";
// import stateSlice from
export const store = configureStore({
  reducer: {
    theUser: theUserSlice,
    //state:stateSlice
  },
});
