import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMW from "redux-thunk";
import authReducer from "./auth-reducer";
import friendsReducer from "./friends-reducer";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer
});


const store = createStore(reducers, applyMiddleware(thunkMW));

export default store;