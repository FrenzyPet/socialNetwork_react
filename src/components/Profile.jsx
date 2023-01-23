import classes from './Profile.module.css'

const Profile = () => {
  return (
    <section className={classes.profile}>
    <div>
      <img className={classes.image} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
    </div>
    <ul className={classes.posts}>
      <li className={classes.item}>Post 1</li>
      <li className={classes.item}>Post 2</li>
      <li className={classes.item}>Post 3</li>
    </ul>
  </section>
  )
}

export default Profile;

