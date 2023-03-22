import classes from './Post.module.css';
import avatar from '../../../../assets/images/user-avatar.png';
import { useSelector } from 'react-redux';

const Post = (props) => {

  const profile = useSelector(state => state.profilePage.profile)
  return (
    <li className={classes.item}>
      <div className={classes.item__avatarWrapper}>
        <img className={classes.item__avatarImage} src={profile.photos.large || avatar} alt='img'></img>
      </div>
      <p className={classes.item__text}>{props.message}</p>
      <p className={classes.item__likes}>Likes: {props.likesCount}</p>
    </li>
  )
}

export default Post;

