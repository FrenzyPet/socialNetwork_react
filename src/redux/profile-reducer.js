import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST-STATE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  postsData: [
    { message: 'Please, kill me!', id: 1, likeCount: 10},
    { message: 'Everything fucked me.', id: 2, likeCount: 20},
    { message: 'I dont want to live =(', id: 3, likeCount: 30}
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST: {
      const newPost = {
        message: action.payload,
        id: state.postsData.length + 1,
        likeCount: 0
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPost: ''
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }

    default:
      return state;
  }
}

export const addPost = (postText) => ({type: ADD_POST, payload: postText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (statusText) => ({type: SET_USER_STATUS, status: statusText})

export const getUserProfile = (userID) => (dispatch) => {
  profileAPI.getUserProfile(userID)
    .then(data => dispatch(setUserProfile(data)))
}

export const getStatus = (userID) => (dispatch) => {
  profileAPI.getStatus(userID)
    .then(response => {
      dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = (statusText) => (dispatch) => {
  profileAPI.updateStatus(statusText)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(statusText))
      }
    })
}

export default profileReducer;