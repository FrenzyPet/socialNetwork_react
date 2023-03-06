import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators';
import { FormField } from '../../common/FormsFields/FormsFields';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const maxLength10 = maxLength(10)

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
        <Field
               name='newPostBody'
               component={FormField}
               typefield='textarea'
               placeholder='Что у Вас нового?'
               validate={[required, maxLength10]}
        />
        <button className={classes.button}>Опубликовать</button>
    </form>
  )
}

const NewPostReduxForm = reduxForm({ form: 'profileNewPost' })(NewPostForm)

export default MyPosts;

