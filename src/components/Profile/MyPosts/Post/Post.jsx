import classes from './Post.module.css'

const Post = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.item__avatar}></div>
      <p className={classes.item__text}>{props.message}</p>
    </li>
  )
}

export default Post;

