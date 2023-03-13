import React from 'react';
import { Form, Field } from 'react-final-form'
import { FormField } from '../../common/FormsFields/FormsFields';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { maxLength, required, composeValidators } from '../../../utils/validators';

const NewPostForm = (props) => {

  const onSubmit = (formData) => {
    props.addNewPost(formData.newPostBody);
  }

  return (
    <Form 
      onSubmit={onSubmit}
    >
      {(props) => (
        <form className={classes.newPost} onSubmit={ props.handleSubmit }>
            <Field
                  name='newPostBody'
                  component={FormField}
                  typefield='textarea'
                  placeholder='Что у Вас нового?'
                  validate={composeValidators(required, maxLength(10))}
            />
            <button className={classes.button} type="submit">Опубликовать</button>
        </form>
      )}
    </Form>
  )
}

const MyPosts = (props) => {

  let postsElements = props.postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} key={item.id} />));

  return (
    <div>
      <NewPostForm addNewPost={props.addPost}/>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;

