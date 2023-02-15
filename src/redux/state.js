const ADD_POST = 'ADD-POST-STATE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
  _state: {
    profilePage: {
      postsData: [
        { message: 'Please, kill me!', id: 1, likeCount: 10},
        { message: 'Everything fucked me.', id: 2, likeCount: 20},
        { message: 'I dont want to live =(', id: 3, likeCount: 30}
      ],
      newPost: ''
    },
    messagesPage: {
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
    friendsPage: {
      friendsData: [
        { id: '001', name: 'Маша', avatar: 'http://android-obzor.com/wp-content/uploads/2022/03/1-43-1.jpg' },
        { id: '002', name: 'Катя', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VfKoaIJI1jRcyFKFNa3cnR3AE0Eelh0Anw&usqp=CAU' },
        { id: '003', name: 'Паша', avatar: 'https://fanibani.ru/wp-content/uploads/2021/11/400-anime-avatarok-dlya-vk-ks-go-ili-stim-1.png' }
      ]
    }
  },

  _callSubscriber() {
    console.log('State change');
  },

  getState() {
    return this._state;
  },
  
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        message: this._state.profilePage.newPost,
        id: this._state.profilePage.postsData.length + 1,
        likeCount: 0
      }
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPost = '';
      this._callSubscriber();
    };

    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPost = action.textMessage;
      this._callSubscriber();
    };

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber();
    }

    if (action.type === SEND_MESSAGE) {
      const newMessage = {
        text: this._state.messagesPage.newMessageText,
        id: 6,
        isMine: true
      }
      this._state.messagesPage.messagesData.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber();
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, textMessage: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store;