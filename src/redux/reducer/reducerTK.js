import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import registerSlice from "./registerSlice";

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice,
    registerReducer: registerSlice,
  }
})
