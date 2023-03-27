import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const usersSlice = createSlice({
  name: 'users',
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

export const { red1, red2 } = usersSlice.actions

export default usersSlice.reducer;