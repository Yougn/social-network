import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
        <img src="https://pm1.narvii.com/6755/f9aeb84303feb4c5fec28de819b385857d3a187dv2_hq.jpg" alt="Аватар пользователя" />
        {props.message}
        <div>
            <span>{props.likesCount}</span>
        </div>
    </div>
}

export default Post;