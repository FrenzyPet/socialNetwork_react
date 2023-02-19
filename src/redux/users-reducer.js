const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const DOWNLOAD_USERS = 'DOWNLOAD-USERS';

const initialState = {
  usersData: [
    { id: '1', name: 'Artem', surname: 'Yakimov', avatar: 'https://iplogger.com/2ouAJ1', statusbar: "I'm dying", location: { country: 'Russia', town: 'Korolev' }, isFollow: true },
    { id: '2', name: 'Aleksey', surname: 'Aleksandrov', avatar: 'https://iplogger.com/2o0SJ1', statusbar: "I do my business", location: { country: 'Russia', town: 'Moscow' }, isFollow: true },
    { id: '3', name: 'Dmitriy', surname: 'Kuzuberdin', avatar: 'https://iplogger.com/2o5SJ1', statusbar: "YOYOYO", location: { country: 'Belarus', town: 'Minsk' }, isFollow: false },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW_USER: 
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userID) {
            return {...user, isFollow: true}
          }
          return user;
        })
      };
    
    case UNFOLLOW_USER: 
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userID) {
            return {...user, isFollow: false}
          }
          return user;
        })
      };
    
    case SET_USERS: 
      return {
        ...state,
        usersData: [...state.usersData, ...action.usersData]
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
export const setUsersAC = () => ({ type: SET_USERS })
export const downloadUsersAC = (text) => ({ type: DOWNLOAD_USERS, newUsers: [] })

export default usersReducer;