import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MyFriends from './components/MyFriends/MyFriends';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';
import CheckAuth from './components/Layout/CheckAuth';

const Profile = lazy(() => import('./components/Profile/Profile'));
const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'));
const News = lazy(() => import('./components/News/News'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Users = lazy(() => import('./components/Users/Users'));
const Login = lazy(() => import('./components/Login/Login'));
const Music = lazy(() => import('./components/Music/Music'));

const App = () => {
  const isInit = useSelector(state => state.app.isInit)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!isInit) {
    return <Preloader />;
  }

  return (
    <div className={classes.wrapper}>
      <Header />
      <Navigation />
      <MyFriends />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<CheckAuth/>}>
            <Route path='/profile/:userID?' element={<Profile/>} />
            <Route path='/dialogs/*' element={<Dialogs/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/users' element={<Users/>} />
          </Route>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;