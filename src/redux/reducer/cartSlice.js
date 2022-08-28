import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0
}

const cartSlice = createSlice({
  name: 'INCREASE',
  initialState,
  reducers: {
    setIncrease: (state, action) => {
      console.log(1111, action.payload)
      state.count = state.count + 1
    }
  }
})

export const { setIncrease } = cartSlice.actions

export default cartSlice.reducer;