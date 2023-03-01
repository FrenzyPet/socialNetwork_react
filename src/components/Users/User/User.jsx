import classes from './User.module.css';
import avatar from '../../../assets/images/user-avatar.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

const User = (props) => {
  return (
    <li className={classes.userItem}>
      <div className={classes.user__view}>
        <NavLink to={'/profile/' + props.id}>
          <img className={classes.user__avatar} src={props.photos.small || avatar} alt="avatar" />
        </NavLink>
        { props.followed
            ? (<button className={classes.user__button} disabled={props.followingInProgress.some(item => item === props.id)} type='button' onClick={() => {
              props.toggleFollowingProgress(true, props.id)
              usersAPI.unfollowUser(props.id)
                .then(data => {
                  if (data.resultCode === 0) {
                    props.unfollowUser(props.id)
                  }
                  props.toggleFollowingProgress(false, props.id)
                })
              
            }}>Удалить</button>)
            : (<button className={classes.user__button} disabled={props.followingInProgress.some(item => item === props.id)} type='button' onClick={() => {
              props.toggleFollowingProgress(true, props.id)
              usersAPI.followUser(props.id)
                .then(data => {
                  if (data.resultCode === 0) {
                    props.followUser(props.id)
                  }
                  props.toggleFollowingProgress(false, props.id)
                })
              
            }}>Добавить</button>)}
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