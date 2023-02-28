import classes from './User.module.css';
import avatar from '../../../assets/images/user-avatar.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const User = (props) => {
  return (
    <li className={classes.userItem}>
      <div className={classes.user__view}>
        <NavLink to={'/profile/' + props.id}>
          <img className={classes.user__avatar} src={props.photos.small ? props.photos.small : avatar} alt="avatar" />
        </NavLink>
        { props.followed
            ? (<button className={classes.user__button} type='button' onClick={() => {

              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {withCredentials: true, headers: {"API-KEY" : "6efd009f-3401-4ef7-9940-7b6f29544df0"}})
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollowUser(props.id)
                  }
                })
              
            }}>Удалить</button>)
            : (<button className={classes.user__button} type='button' onClick={() => {

              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {withCredentials: true, headers: {"API-KEY" : "6efd009f-3401-4ef7-9940-7b6f29544df0"}})
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.followUser(props.id)
                  }
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