import Dialogs from './Dialogs';
import { updateMessageTextActionCreator, sendMessageActionCreator } from '../../redux/message-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateNewMessage: (text) => dispatch(updateMessageTextActionCreator(text))
  }
}

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer;