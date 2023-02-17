import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  const state = props.store.getState()

  const addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const updatePostText = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  }

  return (
    <MyPosts
      addNewPost={addNewPost}
      updatePostText={updatePostText}
      postsData={state.profilePage.postsData}
      newPost={state.profilePage.newPost}
    />
  )
}

export default MyPostsContainer;

