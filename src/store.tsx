import { configureStore } from "@reduxjs/toolkit";
import counter from "./redux/slices/counterSlice";

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
