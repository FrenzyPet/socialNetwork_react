import classes from './Dialogs.module.css';
import { DialogItem, dialogsData } from './DialogsItem/DialogsItem';
import { Message, messagesData } from './Message/Message';

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