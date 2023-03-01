import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST-STATE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  postsData: [
    { message: 'Please, kill me!', id: 1, likeCount: 10},
    { message: 'Everything fucked me.', id: 2, likeCount: 20},
    { message: 'I dont want to live =(', id: 3, likeCount: 30}
  ],
  newPost: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST: {
      const newPost = {
        message: state.newPost,
        id: state.postsData.length + 1,
        likeCount: 0
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPost: ''
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPost: action.textMessage
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, textMessage: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userID) => (dispatch) => {
  profileAPI.getUserProfile(userID)
      .then(data => dispatch(setUserProfile(data)))
}

export default profileReducer;