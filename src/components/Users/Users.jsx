import classes from './Users.module.css';
import User from './User/User';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { requestUsers, changePage, followThunk, unfollowThunk } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Pagination from '../common/Pagination/Pagination';

const Users = (props) => {
  const { 
    usersData,
    pageSize,
    totalCount, 
    currentPage, 
    isFetching, 
    followingInProgress
  } = useSelector(state => state.usersPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize))
  }, [dispatch, currentPage, pageSize]);  

  const onPageChanged = (pageNumber) => {
    dispatch(changePage(pageNumber, pageSize))
  }

  const onFollow = (userID) => {
    dispatch(followThunk(userID))
  }

  const onUnfollow = (userID) => {
    dispatch(unfollowThunk(userID))
  }

  const usersElement = usersData.map(item => (
        <User
          key={item.id}
          id={item.id}
          name={item.name}
          photos={item.photos}
          status={item.status}
          followed={item.followed}
          followingInProgress={followingInProgress}
          onFollow={onFollow}
          onUnfollow={onUnfollow}
          />
      ))

  return (<>
    {isFetching ? <Preloader/> : null}
    <div className={classes.users}>
      <Pagination totalCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChanged={onPageChanged}
      />
      <form className={classes.users__form} action="">
        <input className={classes.form__input} type="text" placeholder="Введите имя пользователя"/>
        <button className={classes.form__button} type='submit'>Найти друзей</button>
      </form>
      <ul className={classes.users__list}>
        { usersElement }
      </ul>
    </div>
  </>
  )

}

export default Users;