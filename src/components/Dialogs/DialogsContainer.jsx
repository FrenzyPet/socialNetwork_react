import Dialogs from './Dialogs';
import { updateMessageTextActionCreator, sendMessageActionCreator } from '../../redux/message-reducer';

const DialogsContainer = (props) => {

  const state = props.store.getState()

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  const updateNewMessage = (text) => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  }

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessage={updateNewMessage}
      dialogsData={state.messagesPage.dialogsData}
      messagesData={state.messagesPage.messagesData}
      newMessageText={state.messagesPage.newMessageText}
    />
  )
}

export default DialogsContainer;