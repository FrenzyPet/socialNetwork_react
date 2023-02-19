import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addNewPost();
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updatePostText(text);
  }

  let postsElements = props.postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} key={item.id} />));

  return (
    <div>
      <div className={classes.newPost}>
        <textarea className={classes.newPost_text} onChange={ onPostChange } ref={newPostElement} placeholder='Что у Вас нового?' value={props.newPost}></textarea>
        <button className={classes.button} onClick={ onAddPost } type='button'>Опубликовать</button>
      </div>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;

