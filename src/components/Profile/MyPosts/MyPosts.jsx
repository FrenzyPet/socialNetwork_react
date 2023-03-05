import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
    props.addNewPost(formData.newPostBody);
  }

  let postsElements = props.postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} key={item.id} />));

  return (
    <div>
      <NewPostReduxForm onSubmit={ onSubmit }/>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

const NewPostForm = (props) => {
  return (
    <form className={classes.newPost} onSubmit={ props.handleSubmit }>
        <Field className={classes.newPost_text} name='newPostBody' component='textarea' placeholder='Что у Вас нового?'></Field>
        <button className={classes.button}>Опубликовать</button>
    </form>
  )
}

const NewPostReduxForm = reduxForm({ form: 'profileNewPost' })(NewPostForm)

export default MyPosts;

