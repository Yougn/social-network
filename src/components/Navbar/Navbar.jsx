import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className={classes.nav}>
        <ul className={classes.nav__list}>
            <li className={classes.nav__item}>
                <NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink>
            </li>
            <li className={classes.nav__item}>
                <NavLink to="/Dialogs" activeClassName={classes.active}>Messages</NavLink>
            </li>
            <li className={classes.nav__item}>
                <NavLink to="/Users" activeClassName={classes.active}>Users</NavLink>
            </li>
            <li className={classes.nav__item}>
                <NavLink to="#s">News</NavLink>
            </li>
            <li className={classes.nav__item}>
                <NavLink to="#s">Music</NavLink>
            </li>
            <li className={classes.nav__item}>
                <NavLink to="#s">Settings</NavLink>
            </li>
        </ul>
    </nav>;
}

export default Navbar;