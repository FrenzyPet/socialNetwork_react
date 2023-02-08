import classes from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';

const App = ({ state }) => {
  return (
      <div className={classes.wrapper}>
        <Header />
        <Navigation />
        <Friends />
        <Routes className={classes.content}>
          <Route path='/' element={<Profile profilePage={state.profilePage}/>} />
          <Route path='/dialogs/*' element={<Dialogs messagesPage={state.messagesPage}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
  );
}

export default App;
