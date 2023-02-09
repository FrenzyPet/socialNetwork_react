import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  const newPostElement = React.createRef();
  const addNewPost = () => {
    const newMessage = newPostElement.current.value;
    props.addPostState(newMessage);
    newPostElement.current.value = '';
  }

  let postsElements = props.postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} />));

  return (
    <div>
      <div className={classes.newPost}>
        <textarea className={classes.newPost_text} ref={newPostElement} placeholder='Что у Вас нового?'></textarea>
        <button className={classes.button} onClick={addNewPost} type='button'>Опубликовать</button>
      </div>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;

