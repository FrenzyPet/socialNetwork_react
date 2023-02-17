import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((item) => (<DialogItem name={item.name} id={item.id} />));
  let messagesElements = props.messagesData.map((item) => (<Message text={item.text} id={item.id} isMine={item.isMine}/>));
  let newMessageText = props.newMessageText;

  const onSendButtonClick = () => {
    props.sendMessage();
  }

  const onNewMessageChange = (evt) => {
    let text = evt.target.value;
    props.updateNewMessage(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__list}>
        <div className={classes.dialogs__search}>
          <input className={classes.dialogs__search__input} type="text" placeholder='Найти диалог' />
        </div>
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