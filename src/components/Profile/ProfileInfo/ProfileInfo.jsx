import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import avatar from '../../../assets/images/user-avatar.png';
import ProfileStatus from './ProfileStatus';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserProfile, getStatus, updateStatus } from "../../../redux/profile-reducer";
import PhotoModal from './PhotoModal/PhotoModal';
import { useState } from 'react';
import AboutPersonModal from './AboutPersonModal/AboutPersonModal';
import EditFormModal from './EditFormModal/EditFormModal';
import iconInfo from '../../../assets/images/info-icon.svg'
import iconSettings from '../../../assets/images/settings-icon.svg'

const ProfileInfo = () => {
  const [isPhotoModal, setPhotoModal] = useState(false)
  const [isAboutModal, setAboutModal] = useState(false)
  const [isEditFormModal, setEditFormModal] = useState(false)

  const { profile, status} = useSelector(state => state.profilePage, shallowEqual)
  const userID = useSelector(state => state.auth.userID)
  const match = { params: useParams()}
  const dispatch = useDispatch();
  
  useEffect(() => {
    let currentUserID = match.params.userID;
    if (!currentUserID) {
      currentUserID = userID
    }
    dispatch(getUserProfile(currentUserID))
    dispatch(getStatus(currentUserID))
  }, [dispatch, userID, match.params.userID])
  
  const onUpdateStatus = (statusText) => {
    dispatch(updateStatus(statusText))
  }

  const onPhotoClick = () => {
    if (!match.params.userID) {
      setPhotoModal(!isPhotoModal)
    }
  }

  if (!profile) {
    return <Preloader/>
  }

  return (
    <div className={classes.profileInfo}>
      <div className={classes.info}>
        <div className={classes.avatar + ' ' + (match.params.userID ? classes.avatar__notOwner : '')} onClick={onPhotoClick}>
          <img className={classes.photo} src={profile.photos.large || avatar} width='100' height='100' alt='profile avatar'></img>
        </div>
        <div className={classes.data}>
          <p className={classes.name}>{profile.fullName}</p>
          <ProfileStatus status={status} updateStatus={onUpdateStatus} isOwner={match.params.userID}/>
          <div className={classes.settings}>
            <div className={classes.detailsWrapper} onClick={() => setAboutModal(true)}>
              <img className={classes.detailsIcon} src={iconInfo} width='12' height='12' alt="icon" />
              <span className={classes.detailsTitle}>Подробнее</span>
            </div>
           { !match.params.userID &&
              <div className={classes.detailsWrapper} onClick={() => setEditFormModal(true)}>
                <img className={classes.detailsIcon} src={iconSettings} width='12' height='12' alt="icon" />
                <span className={classes.detailsTitle}>Редактировать профиль</span>
              </div>
            }
          </div>
        </div>
      </div>
      <AboutPersonModal isAboutModal={isAboutModal} setAboutModal={setAboutModal}/>
      <EditFormModal isEditFormModal={isEditFormModal} setEditFormModal={setEditFormModal}/>
      <PhotoModal isPhotoModal={isPhotoModal} setPhotoModal={setPhotoModal}/>
    </div>
  )
}

export default ProfileInfo;

