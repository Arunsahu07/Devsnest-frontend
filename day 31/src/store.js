import { configureStore } from "@reduxjs/toolkit";
import cartDetailReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice"

const store = configureStore({
  reducer: {
    cartDetail : cartDetailReducer,
    Products :  productReducer,
  },
});

export default store;
