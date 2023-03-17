import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import classes from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import MyFriendsContainer from './components/MyFriends/MyFriendsСontainer';
import { Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

const App = ({ isInit, initializeApp }) => {
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!isInit) {
    return <Preloader />;
  }

  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <Navigation />
      <MyFriendsContainer />
      <Routes>
        <Route path='/profile/:userID?' element={<ProfileContainer />} />
        <Route path='/dialogs/*' element={<DialogsContainer />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/users' element={<UsersContainer />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isInit: state.app.isInit,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);