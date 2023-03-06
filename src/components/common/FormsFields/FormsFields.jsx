import style from './FormsFields.module.css';
import TooltipError from '../TooltipError/TooltipError';

export const FormField = ({ input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (
    <div className={style.field__wrapper}>
      <props.typefield className={style.textarea + ' ' + (hasError ? style.textarea__error : null)} {...input} {...props}/>
      { hasError && <TooltipError textError={meta.error} right={props.right}/>}
    </div>
  )
}