import classes from './Post.module.css'

const Post = () => {
  return (
    <li className={classes.item}>
      <div className={classes.item__avatar}></div>
      <p className={classes.item__text}>Please, kill me!</p>
    </li>
  )
}

export default Post;

