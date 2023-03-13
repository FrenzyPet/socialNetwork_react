import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import thunkMW from "redux-thunk";
import appReducer from "./app-reducer";
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
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMW)));

export default store;