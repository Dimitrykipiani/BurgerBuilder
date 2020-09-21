import React from 'react';
import Logo from '../../Logo/Logo';
import Classes from '../Toolbar/Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu';

const Toolbar = (props) => (
    <header className={Classes.Toolbar}>
        {/* <div>MENU</div> */}
        <BurgerMenu toggle={props.toggleSideBar} />
        <div className={Classes.Logo}>
            <Logo />
        </div>
        <nav className={Classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar;