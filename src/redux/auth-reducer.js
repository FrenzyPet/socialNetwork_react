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
        ...action.userData,
        isAuth: true
      }

    default:
      return state;
  }
}

export const setUserLogin = (userID, login, email) => ({type: SET_USER_LOGIN, userData: {userID, login, email}}); 

export default authReducer;