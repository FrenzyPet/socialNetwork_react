import classes from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <li className={classes.dialogs__item}>
      <NavLink className={classes.dialogs__link} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;