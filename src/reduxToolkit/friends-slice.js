import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const friendsSlice = createSlice({
  name: 'friends',
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

export const { red1, red2 } = friendsSlice.actions

export default friendsSlice.reducer;