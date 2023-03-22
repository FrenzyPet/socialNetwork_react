import { usersAPI } from "../api/api";

const FOLLOW_USER = 'frenzyPulse/users/FOLLOW-USER';
const UNFOLLOW_USER = 'frenzyPulse/users/UNFOLLOW-USER';
const SET_USERS = 'frenzyPulse/users/SET-USERS';
const SET_CURRENT_PAGE = 'frenzyPulse/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'frenzyPulse/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'frenzyPulse/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'frenzyPulse/users/TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
  usersData: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW_USER: 
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userID) {
            return {...user, followed: true}
          }
          return user;
        })
      };
    
    case UNFOLLOW_USER: 
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userID) {
            return {...user, followed: false}
          }
          return user;
        })
      };
    
    case SET_USERS: 
      return {
        ...state,
        usersData: [...action.users]
      };

    case SET_CURRENT_PAGE: 
      return {
        ...state,
        currentPage: action.currentPage
      };

    case SET_TOTAL_USERS_COUNT: 
      return {
        ...state,
        totalCount: action.totalCount
      }; 
    
    case TOGGLE_IS_FETCHING: 
      return {
        ...state,
        isFetching: action.isFetching
      };

    case TOGGLE_FOLLOWING_PROGRESS: 
      return {
        ...state,
        followingInProgress: action.isFetching
                                ? [...state.followingInProgress, action.userID]
                                : state.followingInProgress.filter(item => item !== action.userID)
      };

    default:
      return state;
  }
}

export const followUser = (userID) => ({ type: FOLLOW_USER, userID })
export const unfollowUser = (userID) => ({ type: UNFOLLOW_USER, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setIsFetching = (value) => ({ type: TOGGLE_IS_FETCHING, isFetching: value })
export const toggleFollowingProgress = (value, userID) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching: value, userID })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => { /* Thunk */
  dispatch(setIsFetching(true))
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
}

export const changePage = (pageNumber, pageSize) => async (dispatch) => { /* Thunk */
  dispatch(setCurrentPage(pageNumber));
  dispatch(setIsFetching(true))
  const data = await usersAPI.getUsers(pageNumber, pageSize)
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
}

export const unfollowThunk = (userID) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userID))
  const data = await usersAPI.unfollowUser(userID)
  if (data.resultCode === 0) {
    dispatch(unfollowUser(userID))
  }
  dispatch(toggleFollowingProgress(false, userID))
}

export const followThunk = (userID) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userID))
  const data = await usersAPI.followUser(userID)
  if (data.resultCode === 0) {
    dispatch(followUser(userID))
  }
  dispatch(toggleFollowingProgress(false, userID))
}

export default usersReducer;