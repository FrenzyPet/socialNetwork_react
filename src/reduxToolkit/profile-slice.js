import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const profileSlice = createSlice({
  name: 'profile',
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

export const { red1, red2 } = profileSlice.actions

export default profileSlice.reducer;