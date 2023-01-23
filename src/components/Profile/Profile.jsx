import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <section className={classes.profile}>
      <div>
        <img className={classes.image} src='https://i.yapx.ru/VYT6g.jpg' width='200' height='100'></img>
      </div>
      <div className={classes.info}>
        <div className={classes.avatar}>
          <img className={classes.photo} src='https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg' width='100' height='100'></img>
        </div>
        <div className={classes.data}>
          <p className={classes.name}>Artem Y.</p>
          <p className={classes.point}>Date of Birth: <span>24.09.1993</span></p>
          <p className={classes.point}>City: <span>Korolev</span></p>
          <p className={classes.point}>Education: <span>BMSTU'16</span></p>
        </div>
      </div>
      <MyPosts />
    </section>
  )
}

export default Profile;

