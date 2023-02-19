import classes from './MyFriends.module.css';
import Friend from './Friend/Friend';

const MyFriends = (props) => {

  const friendsElements = props.friendsData.map( (item) => (<Friend id={item.id} name={item.name} avatar={item.avatar} key={item.id}/>));

  return (
    <section className={classes.friends}>
      <h2 className={classes.friends__title}>My friends</h2>
      <ul className={classes.friends__list}>
        { friendsElements }
      </ul>
    </section>
  )
}

export default MyFriends;