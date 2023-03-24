import { Field, Form } from 'react-final-form';
import style from './EditFormModal.module.css'

const EditFormModal = ( { setEditFormModal }) => {
  const onSubmit = (formData) => {
    console.log(formData)
    setEditFormModal(false)
  }

  return (
    <div className={style.about__wrapper}>
      <div className={style.about}>
        <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.titleWrapper}>
              <h1 className={style.title}>Редактировать профиль</h1>
              <div className={style.buttonWrapper}>
                <button className={style.editButton} type="submit">Сохранить</button>
                <button className={style.closeButton} onClick={() => setEditFormModal(false)} type="button"/>
              </div>
            </div>
            <div className={style.section}>
              <h2 className={style.subtitle}>Общее</h2>
              <label className={style.form__label}>
                <span className={style.form__labelText}>Полное имя:</span>
                <Field className={style.form__input} name="fullName" component="input" placeholder="Полное имя" />
              </label>
              <label className={style.form__label}>
                <span className={style.form__labelText}>Обо мне:</span>
                <Field className={style.form__input} name="aboutMe" component="input" placeholder="Обо мне" />
              </label>
            </div>
            <div className={style.section}>
              <h2 className={style.subtitle}>Контакты</h2>
              <label className={style.form__label}>
                <span className={style.form__labelText}>facebook:</span>
                <Field className={style.form__input} name="facebook" component="input" placeholder="facebook" />
              </label>
              <label className={style.form__label}>
                <span className={style.form__labelText}>github:</span>
                <Field className={style.form__input} name="github" component="input" placeholder="github" />
              </label>
              <label className={style.form__label}>
                <span className={style.form__labelText}>instagram:</span>
                <Field className={style.form__input} name="instagram" component="input" placeholder="instagram" />
              </label>
              <label className={style.form__label}>
                <span className={style.form__labelText}>twitter:</span>
                <Field className={style.form__input} name="twitter" component="input" placeholder="twitter" />
              </label>
            </div>
            <div className={style.section}>
              <h2 className={style.subtitle}>Работа</h2>
              <label className={style.form__label}>
                <span className={style.form__labelText}>Ищу работу:</span>
                <Field className={style.form__input + ' ' + style.form__input__checkbox} name="lookingForAJob" component="input" type="checkbox"/>
              </label>
              <label className={style.form__label}>
                <span className={style.form__labelText}>Стек:</span>
                <Field className={style.form__input} name="lookingForAJobDescription" component="input" placeholder="Стек технологий" />
              </label>
            </div>
          </form>
        )}
        />
      </div>
    </div>
  )
}

export default EditFormModal;