import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import avatar from '../../../assets/images/user-avatar.png';
import ProfileStatus from './ProfileStatus';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserProfile, getStatus, updateStatus } from "../../../redux/profile-reducer";

const ProfileInfo = () => {
  const { profile, status} = useSelector(state => state.profilePage)
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
  
  if (!profile) {
    return <Preloader/>
  }
  
  return (
    <div className={classes.profileInfo}>
      <div className={classes.info}>
        <div className={classes.avatar}>
          <img className={classes.photo} src={profile.photos.large || avatar} width='100' height='100' alt='profile avatar'></img>
        </div>
        <div className={classes.data}>
          <p className={classes.name}>{profile.fullName}</p>
          <ProfileStatus status={status} updateStatus={onUpdateStatus}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;

