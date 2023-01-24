import classes from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <ul className={classes.dialogs__list}>
        <li className={classes.dialogs__item}>Женя</li>
        <li className={classes.dialogs__item}>Ваня</li>
        <li className={classes.dialogs__item}>Петя</li>
      </ul>
      <ul className={classes.dialogs__content}>
        <li className={classes.dialogs__message}>Привет!</li>
        <li className={classes.dialogs__message}>Сможешь скинуть на карту 5к рублей?</li>
        <li className={classes.dialogs__message}>Очень нужно, срочно</li>
      </ul>
    </div>
  )
}

export default Dialogs;