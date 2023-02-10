import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, dispatch }) => {
  return (
    <section className={classes.profile}>
      <ProfileInfo />
      <MyPosts postsData={profilePage.postsData} newPost={profilePage.newPost} dispatch={dispatch}/>
    </section>
  )
}

export default Profile;

