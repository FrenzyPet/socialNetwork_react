import classes from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import { Navigate, Route, Routes } from 'react-router-dom';
import MyFriendsContainer from './components/MyFriends/MyFriendsСontainer';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {
  return (
      <div className={classes.wrapper}>
        <HeaderContainer />
        <Navigation />
        <MyFriendsContainer />
        <Routes>
          <Route path='/' element={<Navigate to='/profile/'/>}/>
          <Route path='/profile/:userID?' element={<ProfileContainer/>} />
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/users' element={<UsersContainer/>} />
        </Routes>
      </div>
  );
}

export default App;
