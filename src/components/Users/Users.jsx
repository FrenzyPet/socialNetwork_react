import classes from './Users.module.css';
import User from './User/User'

const Users = (props) => {

  const usersElements = props.usersData.map(item => {
    return (
      <User
        key={item.id}
        id={item.id}
        name={item.name}
        surname={item.surname}
        avatar={item.avatar}
        statusbar={item.statusbar}
        location={item.location}
        isFollow={item.isFollow}
       />
    )
  })

  return (
    <div className={classes.users}>
      <form className={classes.users__form} action="post">
        <input className={classes.form__input} type="text" placeholder="Введите имя пользователя"/>
        <button className={classes.form__button} type='submit'>Найти друзей</button>
      </form>
      <ul className={classes.users__list}>
        {usersElements}
      </ul>
      <button className={classes.users__button} type='button'>Показать еще...</button>
    </div>

  )
}

export default Users;