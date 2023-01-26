import classes from './MyPosts.module.css'
import Post from './Post/Post';

const postsData = [
  { message: 'Please, kill me!', id: '0001', likeCount: 10},
  { message: 'Everything fucked me.', id: '0002', likeCount: 20},
  { message: 'I dont want to live =(', id: '0003', likeCount: 30}
];

let postsElements = postsData.map((item) => (<Post id={item.id} message={item.message} likesCount={item.likesCount} />));

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

