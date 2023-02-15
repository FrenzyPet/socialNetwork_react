import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { addPost, addPostMessage } from '../../../redux/profile-slice';

const MyPosts = () => {
  const [counter, setCounter] = useState(1);
  const postsData = useSelector((state) => state.profile.postsData);
  const newPost = useSelector((state) => state.profile.newPost);
  const dispatch = useDispatch();
  const newPostElement = React.createRef();

  const addNewPost = () => {
    dispatch(addPost());
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    dispatch(addPostMessage(text));
  }

  let postsElements = postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} />));

  return (
    <div>
      <div className={classes.newPost}>
        <textarea className={classes.newPost_text} onChange={ onPostChange } ref={newPostElement} placeholder='Что у Вас нового?' value={newPost}></textarea>
        <button className={classes.button} onClick={ addNewPost } type='button'>Опубликовать</button>
      </div>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;

