import { configureStore } from "@reduxjs/toolkit";
import cartDetailReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cartDetail : cartDetailReducer
  },
});

export default store;
