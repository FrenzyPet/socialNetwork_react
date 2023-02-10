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
        { text: 'Привет', id: '0001' },
        { text: 'Сможешь скинуть на карту 5к рублей?', id: '0002' },
        { text: 'Очень нужно, срочно', id: '0003' }
      ]
    },
    friendsPage: {
      friendsData: [
        { id: '001', name: 'Маша', avatar: 'http://android-obzor.com/wp-content/uploads/2022/03/1-43-1.jpg' },
        { id: '002', name: 'Катя', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VfKoaIJI1jRcyFKFNa3cnR3AE0Eelh0Anw&usqp=CAU' },
        { id: '003', name: 'Паша', avatar: 'https://fanibani.ru/wp-content/uploads/2021/11/400-anime-avatarok-dlya-vk-ks-go-ili-stim-1.png' }
      ]
    }
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State change');
  },

  addPostState() {
    const newPost = {
      message: this._state.profilePage.newPost,
      id: this._state.profilePage.postsData.length + 1,
      likeCount: 0
    }
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPost = '';
    this._callSubscriber();
  },

  updateNewPostText(textMessage) {
    this._state.profilePage.newPost = textMessage;
    this._callSubscriber();
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  }
}

export default store;