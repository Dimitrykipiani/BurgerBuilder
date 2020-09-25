import React, { useLayoutEffect } from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import Classes from '../NavigationItems/NavigationItems.module.css';

const NavigationItems = (props) =>(
    <ul className={Classes.NavigationItems}>
        <NavigationItem link="/" exact> Burger</NavigationItem>         
        <NavigationItem link="/orders">Orders</NavigationItem>        
    </ul>
)

export default NavigationItems;