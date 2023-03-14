import classes from './Users.module.css';
import User from './User/User';

const Users = (props) => {

  const pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  const curP = props.currentPage;
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
      <li key={item} className={classes.pagination__item + (props.currentPage === item ? ` ${classes.pagination__item_current}` : '')}
          onClick={ () => props.onPageChanged(item) }>
            {item}
      </li>
    )
  })

  const usersElement = props.usersData.map(item => (
        <User
          key={item.id}
          id={item.id}
          name={item.name}
          photos={item.photos}
          status={item.status}
          followed={item.followed}
          followingInProgress={props.followingInProgress}
          unfollowThunk={props.unfollowThunk}
          followThunk={props.followThunk}
          />
      ))

  return (
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
  )

}

export default Users;