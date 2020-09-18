import React, { lazy } from 'react';
import Auxil from '../../Hoc/Auxil'
import Classes from '../Layout/Layout.module.css'

const Layout = (props) => {
    return (
        <Auxil>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Auxil>
    )
}

export default Layout;