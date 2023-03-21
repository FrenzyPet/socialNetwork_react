import classes from './Users.module.css';
import User from './User/User';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { requestUsers, changePage, followThunk, unfollowThunk } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

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

  const pagesCount = Math.ceil(totalCount / pageSize)
  let pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  const curP = currentPage;
  let slicedPages = []
  if (curP >= 1 && curP <=6) {
    slicedPages = pages.slice(0, 11)
  } else if (pagesCount - curP <= 5) {
    slicedPages = pages.slice(pagesCount - 11, pagesCount)
  } else if (curP > 6) {
    slicedPages = pages.slice(curP - 6, curP + 5)
  }

  const paginationElements = slicedPages.map(item => {
    return (
      <li key={item} className={classes.pagination__item + (currentPage === item ? ` ${classes.pagination__item_current}` : '')}
          onClick={ () => onPageChanged(item) }>
            {item}
      </li>
    )
  })

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
      <ul className={classes.pagination}>
        { paginationElements }
      </ul>
      <form className={classes.users__form} action="">
        <input className={classes.form__input} type="text" placeholder="Введите имя пользователя"/>
        <button className={classes.form__button} type='submit'>Найти друзей</button>
      </form>
      <ul className={classes.users__list}>
        { usersElement }
      </ul>
      <button className={classes.users__button} type='button'>Показать еще...</button>
    </div>
  </>
  )

}

export default Users;