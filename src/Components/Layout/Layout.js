import React, { lazy } from 'react';
import Auxil from '../../Hoc/Auxil'
import Classes from '../Layout/Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => {
    return (
        <Auxil>
        <Toolbar/>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Auxil>
    )
}

export default Layout;