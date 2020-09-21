import React from 'react';

import Classes from '../Logo/Logo.module.css';

import BurgerLogo from '../../Assets/burger-logo.png';

const Logo = (props) => (
    <div className={Classes.Logo}>
        <img src={BurgerLogo}/>
    </div>
)

export default Logo;