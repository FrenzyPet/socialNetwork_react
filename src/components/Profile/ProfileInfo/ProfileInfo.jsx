import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import avatar from '../../../assets/images/user-avatar.png';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div className={classes.profileInfo}>
      <div>
        <img className={classes.image} src='https://i.yapx.ru/VYT6g.jpg' width='200' height='100' alt='profile background'></img>
      </div>
      <div className={classes.info}>
        <div className={classes.avatar}>
          <img className={classes.photo} src={props.profile.photos.large || avatar} width='100' height='100' alt='profile avatar'></img>
        </div>
        <div className={classes.data}>
          <p className={classes.name}>{props.profile.fullName}</p>
          <p className={classes.description}>{props.profile.aboutMe}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;

