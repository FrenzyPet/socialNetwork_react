import { useSelector } from 'react-redux';
import style from './AboutPersonModal.module.css'

const AboutPersonModal = ({ isAboutModal, setAboutModal, params }) => {
  const profile = useSelector(state => state.profilePage.profile)
  const {fullName, aboutMe, contacts, lookingForAJob, lookingForAJobDescription} = useSelector(state => state.profilePage.profile)
  const hasContacts = Object.values(contacts).some(item => item !== null)
  const { facebook, github, instagram, twitter } = contacts
  console.log('profile', profile)
  return (
    <div className={style.about__wrapper}>
      <div className={style.about}>
        <h1 className={style.title}>Подробная информация</h1>
        <button className={style.closeButton} onClick={() => setAboutModal(!isAboutModal)} type="button"/>
        <div className={style.infoProfile}>
          <div className={style.section}>
            <h2 className={style.subtitle}>Общее</h2>
            <InfoField name='Полное имя:' value={fullName}/>
            <InfoField name='Обо мне:' value={aboutMe}/>
          </div>
          {
            hasContacts &&
              <div className={style.section}>
                <h2 className={style.subtitle}>Контакты</h2>
                { facebook && <InfoField name='facebook:' value={contacts.facebook}/>}
                { github && <InfoField name='github:' value={contacts.github}/>}
                { instagram && <InfoField name='instagram:' value={contacts.instagram}/>}
                { twitter && <InfoField name='twitter:' value={contacts.twitter}/>}
              </div>
          }
          <div className={style.section}>
            <h2 className={style.subtitle}>Карьера</h2>
            <InfoField name='Статус:' value={lookingForAJob ? 'В поиске' : 'Есть работа'}/>
            {
              lookingForAJob &&
              <InfoField name='Место работы:' value={lookingForAJobDescription}/>
            }
          </div>
        </div>
      </div>
    </div>

  )
}

const InfoField = (props) => {
  return (
    <div className={style.infoField}>
      <b className={style.infoField__name}>{props.name}</b>
      <div className={style.infoField__value}>{props.value}</div>
    </div>
  )
}

export default AboutPersonModal;