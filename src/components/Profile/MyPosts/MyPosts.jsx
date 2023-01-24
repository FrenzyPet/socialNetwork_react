import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <ul className={classes.posts}>
      <Post message='Please, kill me!'/>
      <Post message='Everething fucked me.'/>
      <Post message='I dont want to live =('/>
    </ul>
  )
}

export default MyPosts;

