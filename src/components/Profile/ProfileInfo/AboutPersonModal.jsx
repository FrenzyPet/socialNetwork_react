import { useSelector } from 'react-redux';
import style from './AboutPersonModal.module.css'

const AboutPersonModal = ({ isAboutModal, setAboutModal, params }) => {
  const profile = useSelector(state => state.profilePage.profile)
  console.log(profile)
  return (
    <div className={style.about__wrapper}>
      <div className={style.about}>
        <h1 className={style.title}>Подробная информация</h1>
        <button className={style.closeButton} onClick={() => setAboutModal(!isAboutModal)} type="button"/>
        <div className={style.infoProfile}>
          <div className={style.aboutMe}>

          </div>
          <div className={style.contacts}>

          </div>
          <div className={style.work}>

          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutPersonModal;