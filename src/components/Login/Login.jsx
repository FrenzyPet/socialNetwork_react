import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import style from './Login.module.css';
import { FormField } from '../common/FormsFields/FormsFields';
import { required } from '../../utils/validators';
import { logIn } from '../../redux/auth-reducer';

const LoginForm = (props) => {
  const onSubmit = (formData) => {
    props.logIn(formData.email, formData.password, formData.rememberMe)
  }

  return (
    <Form
      onSubmit={onSubmit}
    >
      {(props) => (
        <form className={style.login__form} onSubmit={props.handleSubmit}>
          <label className={style.form__label}>
            <Field name='email'
                  type='email'
                  typefield='input'
                  placeholder='Введите email'
                  component={FormField}
                  validate={required}
                  right='true'
            />
          </label>
          <label className={style.form__label}>
            <Field name='password'
                  type='password'
                  typefield='input'
                  placeholder='Введите пароль'
                  component={FormField}
                  validate={required}
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
          <button className={style.form__button} type="submit">Войти</button>
          { props.error && <div className={style.error}>{props.error}</div>}
        </form>
      )}
    </Form>
  )
}

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile"/>
  }

  return (
    <div className={style.login}>
      <h1 className={style.login__header}>Вход в FrenzyPulse</h1>
      <LoginForm logIn={props.logIn}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {logIn})(Login);