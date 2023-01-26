import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className={classes.newPost}>
        <textarea className={classes.newPost_text} placeholder='Что у Вас нового?'></textarea>
        <button className={classes.button} type='button'>Опубликовать</button>
      </div>
      <ul className={classes.posts}>
        <Post message='Please, kill me!' />
        <Post message='Everything fucked me.' />
        <Post message='I dont want to live =(' />
      </ul>

    </div>
  )
}

export default MyPosts;

