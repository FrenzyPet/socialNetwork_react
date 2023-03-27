import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const appSlice = createSlice({
  name: 'app',
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

export const { red1, red2 } = appSlice.actions

export default appSlice.reducer;