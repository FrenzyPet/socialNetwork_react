import { combineReducers, legacy_createStore as createStore } from "redux";
import friendsReducer from "./friends-reducer";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";


const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer
});


const store = createStore(reducers)

export default store;