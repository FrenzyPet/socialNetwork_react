import classes from './Friends.module.css';

const Friends = () => {
  return (
    <section className={classes.friends}>
      <h2 className={classes.friends__title}>My friends</h2>
      <ul className={classes.friends__list}>
        <li className={classes.friends__item}>
          <img className={classes.friends__avatar} src="http://android-obzor.com/wp-content/uploads/2022/03/1-43-1.jpg" width="50" height="50" alt="Аватарка." />
          <p className={classes.friends__name}>Маша</p>
        </li>
        <li className={classes.friends__item}>
          <img className={classes.friends__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VfKoaIJI1jRcyFKFNa3cnR3AE0Eelh0Anw&usqp=CAU" width="50" height="50" alt="Аватарка." />
          <p className={classes.friends__name}>Катя</p>
        </li>
        <li className={classes.friends__item}>
          <img className={classes.friends__avatar} src="https://fanibani.ru/wp-content/uploads/2021/11/400-anime-avatarok-dlya-vk-ks-go-ili-stim-1.png" width="50" height="50" alt="Аватарка." />
          <p className={classes.friends__name}>Паша</p>
        </li>
      </ul>
    </section>
  )
}

export default Friends;