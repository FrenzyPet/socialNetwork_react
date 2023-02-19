import classes from './User.module.css'

const User = (props) => {
  return (
    <li className={classes.userItem}>
      <div className={classes.user__view}>
        <img className={classes.user__avatar} src={props.avatar} alt="avatar" />
        <button className={classes.user__button} type='button'>{props.isFollow ? 'Добавить' : 'Удалить'}</button>
      </div>
      <div className={classes.user__info}>
        <div className={classes.user__personal}>
          <span className={classes.user__name}>{props.name} {props.surname}</span>
          <span className={classes.user__status}>{props.statusbar}</span>
        </div>
        <div className={classes.user__location}>
          <span className={classes.user__country}>{props.location.country}</span>
          <span className={classes.user__town}>{props.location.town}</span>
        </div>
      </div>
    </li>
  )
}

export default User;