const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogsData: [
    { name: 'Artem', id: '001' },
    { name: 'Andrey', id: '002' },
    { name: 'Pavel', id: '003' }
  ],
  messagesData: [
    { text: 'Привет', id: '0001', isMine: false },
    { text: 'Сможешь скинуть на карту 5к рублей?', id: '0002', isMine: false },
    { text: 'Очень нужно, срочно', id: '0003', isMine: false },
    { text: 'Тебя взломали?', id: '0004', isMine: true },
  ],
  newMessageText: ''
}

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        text: state.newMessageText,
        id: 6,
        isMine: true
      }
      let stateCopy = {...state}
      stateCopy.messagesData = [...state.messagesData]
      if (newMessage.text) {
        stateCopy.messagesData.push(newMessage);
      }
      stateCopy.newMessageText = '';
      return stateCopy;
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }

    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messageReducer;