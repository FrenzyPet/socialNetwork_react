import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
  return (
    <li className={classes.dialogs__item}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  )
}

const Message = (props) => {
  return (
    <li className={classes.dialogs__message}>{props.text}</li>
  )
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <ul className={classes.dialogs__list}>
        <DialogItem name='Artem' id='001'/>
        <DialogItem name='Andrej' id='002'/>
        <DialogItem name='Pavel' id='003'/>
      </ul>
      <ul className={classes.dialogs__content}>
        <Message text='Привет'/>
        <Message text='Сможешь скинуть на карту 5к рублей?'/>
        <Message text='Очень нужно, срочно'/>
      </ul>
    </div>
  )
}

export default Dialogs;