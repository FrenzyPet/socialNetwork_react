const state = {

  profilePage: {
    postsData: [
      { message: 'Please, kill me!', id: '0001', likeCount: 10},
      { message: 'Everything fucked me.', id: '0002', likeCount: 20},
      { message: 'I dont want to live =(', id: '0003', likeCount: 30}
    ]
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
  }
}

export default state;