import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    postsData: [
      { message: 'Please, kill me!', id: 1, likeCount: 10},
      { message: 'Everything fucked me.', id: 2, likeCount: 20},
      { message: 'I dont want to live =(', id: 3, likeCount: 30}
    ],
    newPost: '',
  },
  reducers: {
    addPost: (state) => {
      const newPost = {
        message: state.newPost,
        id: state.postsData.length + 1,
        likeCount: 0
      };
      return {
        ...state,
        newPost: '',
        postsData: [...state.postsData, newPost],
      };
    },
    addPostMessage: (state, action) => {
      const newPost = action.payload;
      return {
        ...state,
        newPost,
      };
    },
  },
})

export const { addPostMessage, addPost } = profileSlice.actions