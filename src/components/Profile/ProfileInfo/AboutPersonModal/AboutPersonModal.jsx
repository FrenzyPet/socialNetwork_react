import { useSelector } from 'react-redux';
import style from './AboutPersonModal.module.css'

const InfoField = (props) => {
  return (
    <div className={style.infoField}>
      <b className={style.infoField__name}>{props.name}</b>
      <div className={style.infoField__value}>
        { props.value &&
          props.value.indexOf('http') === 0
            ? (<a href={props.value}>{props.value}</a>)
            : props.value
        }
      </div>
    </div>
  )
}

const AboutPersonModal = ({ setAboutModal }) => {
  const {fullName, aboutMe, contacts, lookingForAJob, lookingForAJobDescription} = useSelector(state => state.profilePage.profile)
  return (
    <div className={style.about__wrapper}>
      <div className={style.about}>
        <div className={style.titleWrapper}>
          <h1 className={style.title}>Подробная информация</h1>
          <div className={style.buttonWrapper}>
            <button className={style.closeButton} onClick={() => setAboutModal(false)} type="button"/>
          </div>
        </div>
        <div className={style.infoProfile}>
          <div className={style.section}>
            <h2 className={style.subtitle}>Общее</h2>
            <InfoField name='Полное имя:' value={fullName}/>
            <InfoField name='Обо мне:' value={aboutMe}/>
          </div>
          <div className={style.section}>
            <h2 className={style.subtitle}>Контакты</h2>
            <InfoField name='facebook:' value={contacts.facebook || 'Не указано'}/>
            <InfoField name='github:' value={contacts.github || 'Не указано'}/>
            <InfoField name='instagram:' value={contacts.instagram || 'Не указано'}/>
            <InfoField name='twitter:' value={contacts.twitter || 'Не указано'}/>
          </div>
          <div className={style.section}>
            <h2 className={style.subtitle}>Карьера</h2>
            <InfoField name='Ищу работу:' value={lookingForAJob ? 'Да' : 'Нет'}/>
            {
              lookingForAJob &&
              <InfoField name='Стек:' value={lookingForAJobDescription}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPersonModal;