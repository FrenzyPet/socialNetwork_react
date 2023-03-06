import style from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { FormField } from '../common/FormsFields/FormsFields';
import { required } from '../../utils/validators';

const LoginForm = (props) => {
  return (
    <form className={style.login__form} onSubmit={props.handleSubmit}>
      <label className={style.form__label}>
        <Field name='email'
               type='email'
               typefield='input'
               placeholder='Введите логин'
               component={FormField}
               validate={[required]}
               right='true'
        />
      </label>
      <label className={style.form__label}>
        <Field name='password'
               type='password'
               typefield='input'
               placeholder='Введите пароль'
               component={FormField}
               validate={[required]}
               right='true'
        />
      </label>
      <label className={style.form__label + ' ' + style.form__label__checkbox}>
        <Field name='rememberMe'
               className={style.form__input__checkbox}
               type='checkbox'
               component='input'
        />
        Запомнить вход
      </label>
      <button className={style.form__button}>Залогиниться</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

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