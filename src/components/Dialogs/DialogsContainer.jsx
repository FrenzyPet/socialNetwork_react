import Dialogs from './Dialogs';
import { sendMessageActionCreator } from '../../redux/message-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { compose } from 'redux';

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