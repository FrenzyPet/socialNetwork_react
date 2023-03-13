import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { sendMessage } from '../../redux/message-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
  }
}

const DialogsContainer = compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer;