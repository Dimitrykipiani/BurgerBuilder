import React from 'react';
import Classes from '../BurgerMenu/BurgerMenu.module.css';

const BurgerMenu = (props) =>(
    <div className={Classes.BurgerMenu} onClick={props.toggle}>
        <div className={Classes.Line}></div>
        <div className={Classes.Line}></div>
        <div className={Classes.Line}></div>
    </div>
);

export default BurgerMenu;