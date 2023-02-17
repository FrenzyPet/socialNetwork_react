import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <section className={classes.profile}>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </section>
  )
}

export default Profile;

