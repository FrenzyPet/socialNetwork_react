import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { addMessage, addTextMessage } from '../../redux/message-slice';
import { useDispatch, useSelector } from 'react-redux';

const Dialogs = () => {
  const dispatch = useDispatch();

  const { dialogsData, messagesData, newMessageText } = useSelector(state => state.messages)

  const dialogsElements = dialogsData.map((item) => (<DialogItem name={item.name} id={item.id} />));
  const messagesElements = messagesData.map((item) => (<Message text={item.text} id={item.id} isMine={item.isMine}/>));

  const onSendButtonClick = () => {
    dispatch(addMessage());
  }

  const onNewMessageChange = (evt) => {
    let text = evt.target.value;
    dispatch(addTextMessage(text));
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