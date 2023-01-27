import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { postsData } from '../../../state';

let postsElements = postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likeCount} />));

const MyPosts = () => {
  return (
    <div>
      <div className={classes.newPost}>
        <textarea className={classes.newPost_text} placeholder='Что у Вас нового?'></textarea>
        <button className={classes.button} type='button'>Опубликовать</button>
      </div>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;

