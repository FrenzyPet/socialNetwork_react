import { profileAPI } from "../api/api";

const ADD_POST = 'frenzyPulse/profile/ADD-POST-STATE';
const SET_USER_PROFILE = 'frenzyPulse/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'frenzyPulse/profile/SET_USER_STATUS';
const SET_PHOTO = 'frenzyPulse/profile/SET_PHOTO';

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

    case SET_PHOTO: {
      return {
        ...state,
        profile: {...state.profile, photos: action.payload}
      };
    }

    default:
      return state;
  }
}

export const addPost = (postText) => ({type: ADD_POST, payload: postText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (statusText) => ({type: SET_USER_STATUS, status: statusText})
export const setPhoto = (photos) => ({type: SET_PHOTO, payload: photos})

export const getUserProfile = (userID) => async (dispatch) => {
  const data = await profileAPI.getUserProfile(userID)
  dispatch(setUserProfile(data))
}

export const getStatus = (userID) => async (dispatch) => {
  const response = await profileAPI.getStatus(userID)
  dispatch(setUserStatus(response.data))
}

export const updateStatus = (statusText) => async (dispatch) => {
  const response = await profileAPI.updateStatus(statusText)
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(statusText))
  }
}

export const updatePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.updatePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos))
  }
}

export default profileReducer;