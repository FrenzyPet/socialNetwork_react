import classes from './Post.module.css'

const Post = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.item__avatarWrapper}>
        <img className={classes.item__avatarImage} src='https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg' alt='img'></img>
      </div>
      <p className={classes.item__text}>{props.message}</p>
      <p className={classes.item__likes}>Likes: {props.likesCount}</p>
    </li>
  )
}

export default Post;

