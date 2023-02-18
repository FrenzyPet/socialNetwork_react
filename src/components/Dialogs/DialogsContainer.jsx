import Dialogs from './Dialogs';
import { updateMessageTextActionCreator, sendMessageActionCreator } from '../../redux/message-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateNewMessage: (text) => dispatch(updateMessageTextActionCreator(text))
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;