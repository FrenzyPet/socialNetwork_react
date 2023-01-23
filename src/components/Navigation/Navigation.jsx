import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <a>Profile</a>
          </li>
          <li className={classes.item}>
            <a>Messages</a>
          </li>
          <li className={classes.item}>
            <a>News</a>
          </li>
          <li className={classes.item}>
            <a>Music</a>
          </li>
          <li className={classes.item}>
            <a>Settings</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navigation;

