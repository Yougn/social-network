import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return <li className={classes.messages_item}>{props.message}</li>
}

export default Message;