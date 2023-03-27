import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const messagesSlice = createSlice({
  name: 'messages',
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

export const { red1, red2 } = messagesSlice.actions

export default messagesSlice.reducer;