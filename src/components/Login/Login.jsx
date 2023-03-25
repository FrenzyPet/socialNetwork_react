import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import style from './Login.module.css';
import { logIn } from '../../redux/auth-reducer';
import { useForm } from 'react-hook-form';

const Login = () => {
  const isAuth = useSelector(state => state.auth.isAuth)

  if (isAuth) {
    return <Navigate to="/profile"/>
  }

  return (
    <div className={style.login}>
      <h1 className={style.login__header}>Вход в FrenzyPulse</h1>
      <LoginForm/>
    </div>
  )
}

const LoginForm = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
    dispatch(logIn(formData.email, formData.password, formData.rememberMe))
  }
  console.log(errors)

  return (
    <form className={style.login__form} onSubmit={handleSubmit(onSubmit)}>
      <label className={style.form__label}>
        <input
          {...register('email', {required : "Обязательное поле"})}
          type="email"
          className={style.form__input}
          placeholder="Введите email"
        />
        {errors.email && <span className={style.error}>{errors.email.message}</span>}
      </label>
      <label className={style.form__label}>
        <input
          {...register('password', {required : "Обязательное поле"})}
          type="password"
          className={style.form__input}
          placeholder="Введите пароль"
        />
        {errors.password && <span className={style.error}>{errors.email.message}</span>}
      </label>
      <label className={style.form__label + ' ' + style.form__label__checkbox}>
        <input {...register('rememberMe')} type="checkbox" className={style.form__input__checkbox}/>
        <span className={style.checkbox__mark}></span>
        <span className={style.checkbox__text}>запомнить меня</span>
      </label>
      <button className={style.form__button} type="submit">Войти</button>
    </form>
  )
}

export default Login;