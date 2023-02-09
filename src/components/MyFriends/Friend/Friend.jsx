import classes from './Friend.module.css';

const Friend = (props) => {
  return (
    <li className={classes.friends__item}>
      <img className={classes.friends__avatar} src={props.avatar} width="50" height="50" alt="Аватарка." />
      <p className={classes.friends__name}>{props.name}</p>
    </li>
  )
}

export default Friend;