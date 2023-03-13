import { Form, Field } from 'react-final-form';
import { FormField } from '../common/FormsFields/FormsFields';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const MessageForm = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
    props.sendMessage(formData.newMessageBody)
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
              >
              </Field>
              <button className={classes.dialogs__sendButton}>Отправить</button>
        </form>
      )}
    </Form>
  )
}

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map((item) => (<DialogItem name={item.name} id={item.id} key={item.id}/>));
  let messagesElements = props.messagesData.map((item) => (<Message text={item.text} id={item.id} isMine={item.isMine} key={item.id}/>));

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
        <MessageForm sendMessage={props.sendMessage}/>
      </div>
    </div>
  )
}



export default Dialogs;