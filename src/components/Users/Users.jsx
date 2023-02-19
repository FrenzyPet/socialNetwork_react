// import classes from './Users.module.css';
// import User from './User/User';
// import axios from 'axios';

// const Users = (props) => {

//   if (props.usersData.length === 0) {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users')
//       .then(response => props.setUsers(response.data.items))
//   }

//   const usersElements = props.usersData.map(item => {
//     return (
//       <User
//         key={item.id}
//         id={item.id}
//         name={item.name}
//         photos={item.photos}
//         status={item.status}
//         followed={item.followed}
//         unfollowUser={props.unfollowUser}
//         followUser={props.followUser}
//        />
//     )
//   })

//   return (
//     <div className={classes.users}>
//       <form className={classes.users__form} action="post">
//         <input className={classes.form__input} type="text" placeholder="Введите имя пользователя"/>
//         <button className={classes.form__button} type='submit'>Найти друзей</button>
//       </form>
//       <ul className={classes.users__list}>
//         {usersElements}
//       </ul>
//       <button className={classes.users__button} type='button'>Показать еще...</button>
//     </div>

//   )
// }

// export default Users;