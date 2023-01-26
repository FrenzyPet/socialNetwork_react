import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const dialogsData = [
  { name: 'Artem', id: '001' },
  { name: 'Andrey', id: '002' },
  { name: 'Pavel', id: '003' }
];


const messagesData = [
  { text: 'Привет', id: '0001' },
  { text: 'Сможешь скинуть на карту 5к рублей?', id: '0002' },
  { text: 'Очень нужно, срочно', id: '0003' }
];


const DialogItem = (props) => {
  return (
    <li className={classes.dialogs__item}>
      <NavLink className={classes.dialogs__link} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  )
}

const Message = (props) => {
  return (
    <li className={classes.dialogs__message}>{props.text}</li>
    )
  }
  
let dialogsElements = dialogsData.map((item) => (<DialogItem name={item.name} id={item.id} />));
let messagesElements = messagesData.map((item) => (<Message text={item.text} id={item.id} />));

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <ul className={classes.dialogs__list}>
        { dialogsElements }
      </ul>
      <ul className={classes.dialogs__content}>
        { messagesElements }
      </ul>
    </div>
  )
}

export default Dialogs;