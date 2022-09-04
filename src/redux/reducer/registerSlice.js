import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  isLoading: false,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      //const  resp = await axios.post('url', user)
      return {statusCode : 200}
    } catch (error) {
      return thunkAPI.rejectWithValue('error fake')
    }
  }
)

const registerSlice = createSlice({
  name: 'registerUserSlice',
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      console.log('registerReducer', state)
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { registerReducer } = payload
      console.log('registerReducer1', payload)
    },
    [registerUser.rejected]: (state) => {
      console.log('registerReducer2', state)
    }
  }
})

export default registerSlice.reducer