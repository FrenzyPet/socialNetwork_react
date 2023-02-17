import classes from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import MyFriends from './components/MyFriends/MyFriends';

const App = ({ state, dispatch, store }) => {
  return (
      <div className={classes.wrapper}>
        <Header />
        <Navigation />
        <MyFriends friendsPage={state.friendsPage}/>
        <Routes>
          <Route path='/' element={<Profile store={store}/>} />
          <Route path='/dialogs/*' element={<DialogsContainer store={store}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
  );
}

export default App;
