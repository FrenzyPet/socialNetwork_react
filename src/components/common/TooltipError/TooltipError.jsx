import style from './TooltipError.module.css'

const TooltipError = (props) => {
  return (
    <div className={style.tooltip__wrapper}>
      <button className={style.tooltip__button} type="button">
        <svg className={style.tooltip__icon} aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="13" fill="#df7474"/>
          <path d="M12 7H14V9H12V7ZM14 19H12V10H14V19Z" fill="white"/>
        </svg>
      </button>
      <div className={style.tooltip__text + ' ' + (props.right ? style.tooltip__text_right : null)}>{props.textError}</div>
    </div>
  )
}

export default TooltipError;