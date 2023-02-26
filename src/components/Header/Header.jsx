import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/600px-Wikimedia-logo.png" width="70" height="70" alt='Логотип.'></img>
        <h1 className={classes.title}>FrenzyPulse</h1>
      </div>
      <div className={classes.userMenu}>
        { props.isAuth ?
            <span>{props.login}</span> :
            <NavLink to='/login'>Login</NavLink>
            }
      </div>
    </header>
  )
}

export default Header;

