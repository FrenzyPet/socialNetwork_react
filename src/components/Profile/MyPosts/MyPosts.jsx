import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import { useForm } from 'react-hook-form';

const MyPosts = () => {
  const postsData = useSelector(state => state.profilePage.postsData)
  const postsElements = postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} key={item.id} />));

  return (
    <div>
      <NewPostForm/>
      <ul className={style.postsList}>
        {postsElements}
      </ul>
    </div>
  )
}

const NewPostForm = () => {
  const dispatch = useDispatch()
  const { handleSubmit, register, formState: { errors } } = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
    dispatch(addPost(formData.newPost));
  }

  const validateConfig = {
    required: "Ну напиши что-нибудь",
    minLength: {
      value: 5,
      message: "Напиши пост длиннее 10 символов"
    },
    maxLength: {
      value: 300,
      message: "Пост не может быть длиннее 300 символов. Краткость - сестра таланта :З"
    }
  }

  const textareaClasses = [style.textarea]

  if (errors.newPost) {
    textareaClasses.push(style.textarea__error)
  }

  return (
    <form className={style.form} onSubmit={ handleSubmit(onSubmit) }>
      <div className={style.textareaWrapper}>
        <textarea
              {...register('newPost', validateConfig)}
              className={textareaClasses.join(' ')}
              placeholder='Что у Вас нового?'
        />
        {errors.newPost && <span className={style.error}>{errors.newPost.message || "Некоторая хуйня :/"}</span>}
      </div>
      <button className={style.button} type="submit">Опубликовать</button>
    </form>
  )
}

export default MyPosts;

