import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  const newPostElement = React.createRef();

  const addNewPost = () => {
    props.dispatch({type: 'ADD-POST-STATE'});
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', textMessage: text});
  }

  let postsElements = props.postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} />));

  return (
    <div>
      <div className={classes.newPost}>
        <textarea className={classes.newPost_text} onChange={ onPostChange } ref={newPostElement} placeholder='Что у Вас нового?' value={props.newPost}></textarea>
        <button className={classes.button} onClick={ addNewPost } type='button'>Опубликовать</button>
      </div>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;

