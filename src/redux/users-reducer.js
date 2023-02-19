const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const DOWNLOAD_USERS = 'DOWNLOAD-USERS';

const initialState = {
  usersData: [],
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
    
    case DOWNLOAD_USERS: 
      return {

      };

    default:
      return state;
  }
}

export const followUserAC = (userID) => ({ type: FOLLOW_USER, userID })
export const unfollowUserAC = (userID) => ({ type: UNFOLLOW_USER, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const downloadUsersAC = (text) => ({ type: DOWNLOAD_USERS, newUsers: [] })

export default usersReducer;