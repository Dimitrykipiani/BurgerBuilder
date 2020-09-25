import React from 'react';
import { NavLink } from 'react-router-dom';

import Classes from '../NavigationItem/NavigationItem.module.css';

const NavigationItem = (props) => (
    <li className={Classes.NavigationItem}>
        <NavLink exact activeClassName={Classes.active} to={props.link} href={props.link}
        >{props.children}</NavLink>
    </li>
)

export default NavigationItem;