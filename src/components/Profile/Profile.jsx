import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage }) => {
  return (
    <section className={classes.profile}>
      <ProfileInfo />
      <MyPosts postsData={profilePage.postsData}/>
    </section>
  )
}

export default Profile;

