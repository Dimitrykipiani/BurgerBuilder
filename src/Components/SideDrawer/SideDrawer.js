import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Auxil from '../../Hoc/Auxil/Auxil';
import BackDrop from '../UI/BackDrop/BackDrop';

import Classes from '../SideDrawer/SideDrawer.module.css';
import Backdrop from '../UI/BackDrop/BackDrop';
import classes from '../SideDrawer/SideDrawer.module.css';

const SideDrawer = (props) => {
    let sideDraweClasses = [Classes.SideDrawer, Classes.Open];

    if(props.show != true){
        sideDraweClasses = [Classes.SideDrawer, Classes.Close];
    }

    return (
        <Auxil>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={sideDraweClasses.join(' ')}>
                <div className={Classes.Logo}>
                    <Logo />
                </div>
                <div>
                    <NavigationItems />
                </div>
            </div>
        </Auxil>
    );
}

export default SideDrawer;