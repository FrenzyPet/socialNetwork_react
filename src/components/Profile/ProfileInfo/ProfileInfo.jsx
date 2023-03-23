import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import avatar from '../../../assets/images/user-avatar.png';
import ProfileStatus from './ProfileStatus';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserProfile, getStatus, updateStatus } from "../../../redux/profile-reducer";
import ModalPhoto from './ModalPhoto';
import { useState } from 'react';
import AboutPersonModal from './AboutPersonModal';
import iconInfo from '../../../assets/images/info-icon.svg'

const ProfileInfo = () => {
  const [isPhotoModal, setPhotoModal] = useState(false)
  const [isAboutModal, setAboutModal] = useState(false)
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
        <div className={classes.avatar} onClick={onPhotoClick}>
          <img className={classes.photo} src={profile.photos.large || avatar} width='100' height='100' alt='profile avatar'></img>
        </div>
        <div className={classes.data}>
          <p className={classes.name}>{profile.fullName}</p>
          <ProfileStatus status={status} updateStatus={onUpdateStatus}/>
          <div className={classes.detailsWrapper} onClick={() => setAboutModal(!isAboutModal)}>
            <img className={classes.detailsIcon} src={iconInfo} width='12' height='12' alt="icon" />
            <span className={classes.detailsTitle}>Подробнее</span>
          </div>
        </div>
      </div>
      {isAboutModal && <AboutPersonModal setAboutModal={setAboutModal} isAboutModal={isAboutModal} params={match.params.userID}/>}
      {isPhotoModal && <ModalPhoto setPhotoModal={setPhotoModal} isPhotoModal={isPhotoModal} params={match.params.userID}/>}
    </div>
  )
}

export default ProfileInfo;

