import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <li className={classes.dialogs_item + ' ' + classes.active}>
        <NavLink to={path} >{props.name}</NavLink>
    </li >
}

export default DialogItem;