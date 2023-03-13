import { authAPI } from "../api/api";

const SET_USER_LOGIN = 'SET_USER_LOGIN'

const initialState = {
  userID: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}

export const setUserLogin = (userID, login, email, isAuth) => ({type: SET_USER_LOGIN, payload: {userID, login, email, isAuth}});

export const getUserLogin = () => (dispatch) => {
  return authAPI.startAuthentify()
  .then(data => {
    if (data.resultCode === 0) {
       const {email, id, login} = data.data;
       dispatch(setUserLogin(id, login, email, true))
     }
  })
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
  .then(response => {
    if (response.data.resultCode === 0) {
       dispatch(getUserLogin())
     } else {
      // dispatch(stopSubmit('login', { _error: response.data.messages[0]}))
     }
  })
}

export const logOut = () => (dispatch) => {
  authAPI.logout()
  .then(response => {
    if (response.data.resultCode === 0) {
       dispatch(setUserLogin(null, null, null, false))
     }
  })
}

export default authReducer;
