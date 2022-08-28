import { configureStore } from "@reduxjs/toolkit";
import cartReducerTK from "./cartSlice";

export const store = configureStore({
  reducer: {
    cartReducer: cartReducerTK
  }
}) 