import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { updateMessageTextActionCreator, sendMessageActionCreator } from '../../redux/state';

const Dialogs = ({ messagesPage, dispatch }) => {
  let dialogsElements = messagesPage.dialogsData.map((item) => (<DialogItem name={item.name} id={item.id} />));
  let messagesElements = messagesPage.messagesData.map((item) => (<Message text={item.text} id={item.id} isMine={item.isMine}/>));
  let newMessageText = messagesPage.newMessageText;

  const onSendButtonClick = () => {
    dispatch(sendMessageActionCreator());
  }

  const onNewMessageChange = (evt) => {
    let text = evt.target.value;
    dispatch(updateMessageTextActionCreator(text));
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__list}>
        { dialogsElements }
      </div>
      <div className={classes.dialogs__content}>
        <div className={classes.dialogs__messageList}>
          { messagesElements }
        </div>
        <div className={classes.dialogs__newMessage}>
          <textarea
              className={classes.dialogs__newMessageText}
              onChange={ onNewMessageChange }
              placeholder='Введите текст сообщения'
              value={newMessageText}>
          </textarea>
          <button className={classes.dialogs__sendButton} onClick={ onSendButtonClick } type="button">Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;