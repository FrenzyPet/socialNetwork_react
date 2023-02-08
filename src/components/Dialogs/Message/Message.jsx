import classes from './Message.module.css';

const Message = (props) => {
  return (
    <li className={classes.dialogs__message}>{props.text}</li>
    )
  }
  
export default Message;