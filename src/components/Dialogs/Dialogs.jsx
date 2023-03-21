import { Form, Field } from 'react-final-form';
import { FormField } from '../common/FormsFields/FormsFields';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { maxLength, required, composeValidators } from '../../utils/validators';
import { sendMessage } from '../../redux/message-reducer';
import { useDispatch, useSelector } from 'react-redux';

const MessageForm = (props) => {

  const onSubmit = (formData) => {
    props.onSendMessage(formData.newMessageBody)
  }

  return (
    <Form
      onSubmit={onSubmit}
    >
      {(props) => (
        <form className={classes.dialogs__newMessage} onSubmit={ props.handleSubmit }>
              <Field
                    placeholder='Введите текст сообщения'
                    name='newMessageBody'
                    component={FormField}
                    typefield='textarea'
                    validate={composeValidators(required, maxLength(300))}
              >
              </Field>
              <button className={classes.dialogs__sendButton}>Отправить</button>
        </form>
      )}
    </Form>
  )
}

const Dialogs = (props) => {
  const { dialogsData, messagesData } = useSelector(state => state.messagesPage)
  const dispatch = useDispatch()

  const onSendMessage = (textMessage) => {
    dispatch(sendMessage(textMessage))
  }  

  let dialogsElements = dialogsData.map((item) => (<DialogItem name={item.name} id={item.id} key={item.id}/>));
  let messagesElements = messagesData.map((item) => (<Message text={item.text} id={item.id} isMine={item.isMine} key={item.id}/>));

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
        <MessageForm onSendMessage={onSendMessage}/>
      </div>
    </div>
  )
}

export default Dialogs;