import classes from './User.module.css';
import avatar from '../../../assets/images/user-avatar.png';

const User = (props) => {
  return (
    <li className={classes.userItem}>
      <div className={classes.user__view}>
        <img className={classes.user__avatar} src={props.photos.small ? props.photos.small : avatar} alt="avatar" />
        { props.followed ?
         (<button className={classes.user__button} type='button' onClick={() => props.unfollowUser(props.id)}>Удалить</button>) :
         (<button className={classes.user__button} type='button' onClick={() => props.followUser(props.id)}>Добавить</button>)}
      </div>
      <div className={classes.user__info}>
        <div className={classes.user__personal}>
          <span className={classes.user__name}>{props.name}</span>
          <span className={classes.user__status}>{props.status}</span>
        </div>
        <div className={classes.user__location}>
          <span className={classes.user__country}>Country</span>
          <span className={classes.user__town}>Town</span>
        </div>
      </div>
    </li>

  )
}

export default User;