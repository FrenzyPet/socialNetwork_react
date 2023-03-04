import style from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form className={style.login__form} onSubmit={props.handleSubmit}>
      <label className={style.form__label}>
        <Field name='email' className={style.form__input} type="email" placeholder="Введите логин" component='input'/>
      </label>
      <label className={style.form__label}>
        <Field name='password' className={style.form__input} type="password" placeholder="Введите пароль" component='input'/>
      </label>
      <label className={style.form__label + " " + style.form__label__checkbox}>
        <Field name='rememberMe' className={style.form__input__checkbox} type="checkbox" component='input'/>
        Запомнить вход
      </label>
      <button className={style.form__button} type="submit">Залогиниться</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div className={style.login}>
      <h1 className={style.login__header}>Вход в FrenzyPulse</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;