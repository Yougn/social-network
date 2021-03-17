import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
    return <header className={classes.header}>
        <img src="https://yt3.ggpht.com/ytc/AAUvwnjN2nyOTkJI5hHG_HvxoE7l6E1HzPyQMQg6bqnA=s900-c-k-c0x00ffffff-no-rj" alt="Логотип" />
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header >;
}

export default Header;