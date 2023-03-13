import { getUserLogin } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
  isInit: false
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        isInit: true
      }

    default:
      return state;
  }
}

export const setInitialized = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getUserLogin())
  promise.then(() => dispatch(setInitialized()))
}

export default appReducer;
