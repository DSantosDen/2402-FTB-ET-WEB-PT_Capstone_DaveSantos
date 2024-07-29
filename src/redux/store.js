import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
