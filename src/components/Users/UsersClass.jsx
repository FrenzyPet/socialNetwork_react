import User from './User/User';
import axios from 'axios';
import classes from './Users.module.css';
import React from 'react';

class UsersClass extends React.Component {
  constructor(props) {
    super(props)
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => props.setUsers(response.data.items))
  }

  getUsersElement() {
    return this.props.usersData.map(item => {
      return (
        <User
          key={item.id}
          id={item.id}
          name={item.name}
          photos={item.photos}
          status={item.status}
          followed={item.followed}
          unfollowUser={this.props.unfollowUser}
          followUser={this.props.followUser}
         />
      )
    })
  }

  render() {
    return (
      <div className={classes.users}>
      <form className={classes.users__form} action="post">
        <input className={classes.form__input} type="text" placeholder="Введите имя пользователя"/>
        <button className={classes.form__button} type='submit'>Найти друзей</button>
      </form>
      <ul className={classes.users__list}>
        {this.getUsersElement()}
      </ul>
      <button className={classes.users__button} type='button'>Показать еще...</button>
      </div>
    )
  }
}

export default UsersClass;
