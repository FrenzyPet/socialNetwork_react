import classes from './Message.module.css';
import { messagesData } from '../../../state';


const Message = (props) => {
  return (
    <li className={classes.dialogs__message}>{props.text}</li>
    )
  }
  
export { Message, messagesData };