import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/600px-Wikimedia-logo.png" width="70" height="70"></img>
      <h1 className={classes.title}>FRZ Social</h1>
    </header>
  )
}

export default Header;

