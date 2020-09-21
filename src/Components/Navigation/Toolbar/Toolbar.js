import React from 'react';
import Logo from '../../Logo/Logo';
import Classes from '../Toolbar/Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => (
    <header className={Classes.Toolbar}>
        <div>LOGO</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar;