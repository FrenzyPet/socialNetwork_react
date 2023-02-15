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

const App = () => {

  return (
      <div className={classes.wrapper}>
        <Header />
        <Navigation />
        <MyFriends />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/dialogs/*' element={<Dialogs/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
  );
}

export default App;
