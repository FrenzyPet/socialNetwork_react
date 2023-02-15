const ADD_POST = 'ADD-POST-STATE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
      const newPost = {
        message: state.newPost,
        id: state.postsData.length + 1,
        likeCount: 0
      }
      state.postsData.push(newPost);
      state.newPost = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPost = action.textMessage;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, textMessage: text})

export default profileReducer;