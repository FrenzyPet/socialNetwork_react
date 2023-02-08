import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({ messagesPage }) => {
  let dialogsElements = messagesPage.dialogsData.map((item) => (<DialogItem name={item.name} id={item.id} />));
  let messagesElements = messagesPage.messagesData.map((item) => (<Message text={item.text} id={item.id} />));
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