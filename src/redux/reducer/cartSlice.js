import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0
}

const cartSlice = createSlice({
  name: 'INCREASE',
  initialState,
  reducers: {
    setIncrease: (state, action) => {
      state.count = state.count + 1
    }
  }
})

export const { setIncrease } = cartSlice.actions

export default cartSlice.reducer;