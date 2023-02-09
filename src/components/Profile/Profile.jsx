import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, addPostState, updateNewPostText }) => {
  return (
    <section className={classes.profile}>
      <ProfileInfo />
      <MyPosts postsData={profilePage.postsData} newPost={profilePage.newPost} addPostState={addPostState} updateNewPostText={updateNewPostText}/>
    </section>
  )
}

export default Profile;

