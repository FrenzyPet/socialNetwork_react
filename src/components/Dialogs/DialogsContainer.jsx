import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { sendMessageActionCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (textMessage) => dispatch(sendMessageActionCreator(textMessage)),
  }
}

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer;