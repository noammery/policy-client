import { configureStore } from "@reduxjs/toolkit";
import theUserSlice from "../reducers/theUserSlice";

export const store = configureStore({
  reducer: {
    theUser: theUserSlice,
  },
});
