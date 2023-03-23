import { useDispatch } from 'react-redux'
import { updatePhoto } from '../../../redux/profile-reducer'
import style from './ModalPhoto.module.css'

const ModalPhoto = ({ isPhotoModal, setPhotoModal, params }) => {
  const dispatch = useDispatch()

  const onUpdatePhoto = (evt) => {
    dispatch(updatePhoto(evt.target.files[0]))
    setPhotoModal(!isPhotoModal)
  }

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <h1 className={style.title}>Загрузка новой фотографии</h1>
        <div className={style.description}>Друзьям будет проще узнать вас, если вы загрузите свою настоящую фотографию.</div>
        <button className={style.closeButton} onClick={() => setPhotoModal(!isPhotoModal)} type="button"/>
        { !params &&
            <div className={style.input__wrapper}>
              <label className={style.label}>
                Загрузить новое фото
                <input className={style.input__photo} onChange={onUpdatePhoto} type='file'/>
              </label>
            </div>
          }
      </div>
    </div>
  )

}

export default ModalPhoto;