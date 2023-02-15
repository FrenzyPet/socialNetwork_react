import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
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
  },
  reducers: {
    addMessage: (state) => {
      const newMessage = {
        text: state.newMessageText,
        id: state.messagesData.length + 1,
        isMine: true
      };
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, newMessage],
      };
    },
    addTextMessage: (state, action) => {

      console.log('action', action)
      const text = action.payload;
      
      return {
        ...state,
        newMessageText: text
      };
    },
  },
})

export const { addMessage, addTextMessage } = messageSlice.actions