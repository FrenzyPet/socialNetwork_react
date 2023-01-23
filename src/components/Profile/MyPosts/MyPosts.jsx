import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <ul className={classes.posts}>
      <Post />
      <Post />
      <Post />
    </ul>
  )
}

export default MyPosts;

