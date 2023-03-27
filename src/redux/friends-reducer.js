import { usersAPI } from "../api/api"

const SET_FRIENDS = 'frenzyPulse/friends/SET_FRIENDS'
const ADD_FRIEND = 'frenzyPulse/friends/ADD_FRIEND'
const DELETE_FRIEND = 'frenzyPulse/friends/DELETE_FRIEND'

const initialState = {
  friendsData: []
}

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FRIENDS:
      return {
        friendsData: [...action.payload]
      }

    case ADD_FRIEND:
      return {
        friendsData: [...state.friendsData, action.payload]
      }

    case DELETE_FRIEND:
      return {
        friendsData: [...state.friendsData.filter((item) => item.id !== action.payload)]
      }

    default:
      return state;
  }
}

export const setFriends = (friends) => ({ type: SET_FRIENDS, payload: friends })
export const addFriend = (friend) => ({ type: ADD_FRIEND, payload: friend })
export const deleteFriend = (friendID) => ({ type: DELETE_FRIEND, payload: friendID })

export const requestFriends = () => async (dispatch) => { /* Thunk */
  const data = await usersAPI.getUsers(1, 20);
  dispatch(setFriends(data.items.filter((item) => item.followed)));
}

export default friendsReducer;