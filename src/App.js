import classes from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import MyFriends from './components/MyFriends/MyFriends';

const App = ({ state, addPostState, updateNewPostText }) => {
  return (
      <div className={classes.wrapper}>
        <Header />
        <Navigation />
        <MyFriends friendsPage={state.friendsPage}/>
        <Routes>
          <Route path='/' element={<Profile profilePage={state.profilePage} addPostState={addPostState} updateNewPostText={updateNewPostText}/>} />
          <Route path='/dialogs/*' element={<Dialogs messagesPage={state.messagesPage}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
  );
}

export default App;
