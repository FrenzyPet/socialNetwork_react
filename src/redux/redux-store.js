import { configureStore } from '@reduxjs/toolkit';
import { friendsSlice } from './friends-slice';
import { messageSlice } from './message-slice';
import { profileSlice } from './profile-slice';

export default configureStore({
  reducer: {
    profile: profileSlice.reducer,
    friends: friendsSlice.reducer,
    messages: messageSlice.reducer
  },
})