import { authAPI, securityAPI } from "../api/api";

const SET_USER_LOGIN = 'frenzyPulse/auth/SET_USER_LOGIN'
const SET_CAPTCHA_URL = 'frenzyPulse/auth/SET_CAPTCHA_URL'

const initialState = {
  userID: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: ''
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        ...action.payload
      }

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload
      }

    default:
      return state;
  }
}

export const setUserLogin = (userID, login, email, isAuth) => ({ type: SET_USER_LOGIN, payload: {userID, login, email, isAuth} });
export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: captchaUrl });

export const getUserLogin = () => async (dispatch) => {
  const data = await authAPI.startAuthentify();
  if (data.resultCode === 0) {
    const { email, id, login } = data.data;
    dispatch(setUserLogin(id, login, email, true));
  }
}

export const logIn = (email, password, rememberMe, captcha, setError) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
    switch (response.data.resultCode) {
      case 0:
        dispatch(getUserLogin())
        dispatch(setCaptchaUrl(''))
        break
      case 10:
        dispatch(getCaptcha())
        setError('root.serverError', { 
          type: response.data.resultCode,
          message: response.data.messages[0]
        })
        break
      case 1:
        setError('root.serverError', { 
          type: response.data.resultCode,
          message: response.data.messages[0]
        })
        break
      default:
        break
    }
}

export const logOut = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
      dispatch(setUserLogin(null, null, null, false))
    }
}

export const getCaptcha = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  dispatch(setCaptchaUrl(response.data.url))
}

export default authReducer;
