import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, addPostState }) => {
  return (
    <section className={classes.profile}>
      <ProfileInfo />
      <MyPosts postsData={profilePage.postsData} addPostState={addPostState}/>
    </section>
  )
}

export default Profile;

