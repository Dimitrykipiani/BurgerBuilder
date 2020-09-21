import React, { useLayoutEffect } from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import Classes from '../NavigationItems/NavigationItems.module.css';

const NavigationItems = (props) =>(
    <ul className={Classes.NavigationItems}>
        <NavigationItem active link="/">Burger</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>        
    </ul>
)

export default NavigationItems;