import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    red1: (state) => {
      state.value += 1
    },
    red2: (state) => {
      state.value -= 1
    }
  }
})

export const { red1, red2 } = authSlice.actions

export default authSlice.reducer;