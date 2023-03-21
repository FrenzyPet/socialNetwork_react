const SEND_MESSAGE = 'frenzyPulse/message/SEND-MESSAGE';

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
}

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        text: action.payload,
        id: state.messagesData.length + 1,
        isMine: true
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    }

    default:
      return state;
  }
}

export const sendMessage = (textMessage) => ({type: SEND_MESSAGE, payload: textMessage})

export default messageReducer;