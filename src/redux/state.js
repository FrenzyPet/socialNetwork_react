let rerender = () => {

}

const state = {

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
}


export const addPostState = () => {
  const newPost = {
    message: state.profilePage.newPost,
    id: state.profilePage.postsData.length + 1,
    likeCount: 0
  }
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPost = '';
  rerender();
}

export const updateNewPostText = (textMessage) => {
  state.profilePage.newPost = textMessage;
  rerender();
}

export const subscriber = (observer) => {
  rerender = observer;

}

export default state;