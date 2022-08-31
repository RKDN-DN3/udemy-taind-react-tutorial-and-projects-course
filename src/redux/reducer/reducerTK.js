import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { registerUser } from "./registerReducer";

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice,
    registerReducer: registerUser,
  }
})
