import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const dialogsData = [
  { name: 'Artem', id: '001'},
  { name: 'Andrey', id: '002'},
  { name: 'Pavel', id: '003'}
];

const messagesData = [
  { text: 'Привет', id: '0001'},
  { text: 'Сможешь скинуть на карту 5к рублей?', id: '0002'},
  { text: 'Очень нужно, срочно', id: '0003'}
];

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
        <Message id='' text='Привет'/>
        <Message id='' text='Сможешь скинуть на карту 5к рублей?'/>
        <Message id='' text='Очень нужно, срочно'/>
      </ul>
    </div>
  )
}

export default Dialogs;