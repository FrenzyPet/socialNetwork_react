const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messageReducer = (state, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        text: state.newMessageText,
        id: 6,
        isMine: true
      }
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messageReducer;